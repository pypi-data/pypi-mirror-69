"""Provides the `MultiVector` class used
as elements of the `GeometricAlgebra` for
computation.
"""
# Needed for typings in MultiVector and taking returning MultiVector
from __future__ import annotations
from typing import List, Union, Optional, Any
import tensorflow as tf
import numpy as np

from .blades import (BladeKind, get_blade_repr, get_blade_of_kind_indices,
                     get_blade_indices_from_names)
from .mv_ops import (mv_multiply, mv_add, mv_equal,
                     mv_reversion, mv_grade_automorphism)


class MultiVector:
    """Elements of a geometric algebra used for computation."""

    def __init__(self, blade_values: tf.Tensor, blade_indices: tf.Tensor, algebra: GeometricAlgebra):
        """Creates a multivector of a given algebra with given values
        for given indices.

        Args:
            blade_values: values to use for each blade index
            blade_indices: indices of the blades within `algebra`
                            to go with `blade_values`.
            algebra: `GeometricAlgebra` instance that this multivector
                        belongs to.
        """
        # blade_values: [*Batch, len(blade_indices)]
        self._blade_indices = blade_indices
        self._blade_values = blade_values
        self._algebra = algebra

    @property
    def blade_values(self) -> tf.Tensor:
        """Values for the blades. Indices for the values are given
        by `blade_indices`.
        """
        return self._blade_values

    @property
    def blade_indices(self) -> tf.Tensor:
        """Indices of the blades of this multivector in the `algebra`.
        Values at the indices are given by `blade_values`.
        """
        return self._blade_indices

    @property
    def algebra(self) -> GeometricAlgebra:
        """`GeometricAlgebra` instance this multivector
        belongs to."""
        return self._algebra

    def __hash__(self):
        return hash(self._blade_values.ref())

    def with_changes(self, blade_values: Optional[tf.Tensor] = None,
                     blade_indices: Optional[tf.Tensor] = None) -> self:
        """Returns a copy of this multivector with optional changes made to its
        blade values or indices.

        Args:
            blade_values: optional new values for the returned multivector
            blade_indices: optional new indices for the returned multivector

        Returns:
            Copy of this multivector with optional changes made to its
            blade values or indices if `blade_values` or `blade_indices`
            were set respectively
        """
        return MultiVector(
            blade_values=self.blade_values if blade_values is None else blade_values,
            blade_indices=self.blade_indices if blade_indices is None else blade_indices,
            algebra=self.algebra
        )

    def get_kind_indices(self, kind: BladeKind,
                         invert: bool = False) -> tf.Tensor:
        """Finds a boolean mask for whether this multivector's blade
        indices are of a given kind.

        Args:
            kind: kind of blade indices to set to `True`
            invert: whether to invert the result

        Returns:
            boolean mask for whether this multivector's
            `blade_indices` are of `kind`
        """
        blade_degrees = tf.gather(
            self.algebra.blade_degrees, self.blade_indices
        )

        return get_blade_of_kind_indices(blade_degrees, kind,
                                         self.algebra.max_degree,
                                         invert=invert)

    def mv_of_kind(self, kind: BladeKind) -> MultiVector:
        """Returns a new multivector based on this one which
        has only blades of a given kind.

        Args:
            kind: kind of blades to keep

        Returns:
            `MultiVector` based on this one which
            has only blades of `kind`
        """
        kind_indices = self.get_kind_indices(kind)

        result_indices = tf.gather(self.blade_indices, kind_indices, axis=-1)
        result_values = tf.gather(self.blade_values, kind_indices, axis=-1)

        return self.with_changes(
            blade_values=result_values,
            blade_indices=result_indices
        )

    def tensor_of_kind(self, kind: BladeKind) -> tf.Tensor:
        """Returns a `tf.Tensor` based on this multivector
        with blade values of a given kind.

        Args:
            kind: kind of blades to keep

        Returns:
            `tf.Tensor` based on this multivector which
            has blade values of `kind`
        """
        kind_indices = self.get_kind_indices(kind)
        result_values = tf.gather(self.blade_values, kind_indices, axis=-1)
        return result_values

    def is_pure_kind(self, kind: BladeKind) -> bool:
        """Returns whether this multivector is purely of a given kind
        and has no non-zero values for blades not of the kind.

        Args:
            kind: kind of blade to check purity for

        Returns:
            Whether this multivector is purely of a given kind
            and has no non-zero values for blades not of the kind
        """
        other_kind_indices = self.get_kind_indices(kind, invert=True)
        return tf.reduce_all(tf.gather(
            self.blade_values,
            other_kind_indices,
            axis=-1
        ) == 0)

    @property
    def scalar(self) -> tf.Tensor:
        """Scalar part of this multivector as `tf.Tensor`."""
        return self.tensor("")

    @property
    def scalar_mv(self) -> MultiVector:
        """New multivector with only the scalar part of this multivector."""
        return self.mv_of_kind(BladeKind.SCALAR)

    @property
    def is_pure_scalar(self) -> bool:
        """Whether the multivector is a pure scalar and has no
        other non-zero blade values.
        """
        return self.is_pure_kind(BladeKind.SCALAR)

    @property
    def batch_shape(self) -> List[int]:
        """Batch shape of this multivector
        (ie. how many multivectors this one contains).
        """
        return self.blade_values.shape[:-1]

    @property
    def values_shape(self) -> List[int]:
        """Shape of the individual multivector storage.
        Typically a `list` of size `1` with as many elements
        as this multivector has non-zero blade values."""
        return self.blade_values.shape[-1:]

    def reversion(self) -> MultiVector:
        """Returns the grade-reversed multivector.
        See https://en.wikipedia.org/wiki/Paravector#Reversion_conjugation.

        Returns:
            Grade-reversed `MultiVector`
        """
        new_blade_values = mv_reversion(
            self.blade_indices, self.blade_values, self.algebra.blade_degrees)

        return self.with_changes(
            blade_values=new_blade_values
        )

    def grade_automorphism(self) -> MultiVector:
        """Returns the multivector with odd grades negated.
        See https://en.wikipedia.org/wiki/Paravector#Grade_automorphism.

        Returns:
            `MultiVector` with odd grades negated
        """
        new_blade_values = mv_grade_automorphism(
            self.blade_indices, self.blade_values, self.algebra.blade_degrees)
        return self.with_changes(
            blade_values=new_blade_values
        )

    def conjugation(self) -> MultiVector:
        """Combines reversion and grade automorphism.
        See https://en.wikipedia.org/wiki/Paravector#Clifford_conjugation.

        Returns:
            `MultiVector` after `reversion()` and `grade_automorphism()`
        """
        return self.reversion().grade_automorphism()

    def dual(self) -> MultiVector:
        """Returns the dual of the MultiVector.

        Returns:
            Dual of the MultiVector
        """
        dual_indices = tf.gather(
            self.algebra.dual_blade_indices, self.blade_indices)
        dual_signs = tf.gather(
            self.algebra.dual_blade_signs, self.blade_indices)
        new_values = dual_signs * self.blade_values
        return self.with_changes(
            blade_indices=dual_indices,
            blade_values=new_values,
        )

    def __invert__(self) -> MultiVector:
        """Grade-reversion. See `reversion()`."""
        return self.reversion()

    def __truediv__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """Division of a multi-vector by a scalar.

        Args:
            other: scalar to divide by.

        Returns:
            `MultiVector` divided by `other`
        """
        other = self.algebra.as_mv(other)

        if other.is_pure_scalar:
            divisor = other.scalar
            return self.with_changes(blade_values=self.blade_values / divisor)

        raise Exception(
            "Division of two multi-vectors is ambiguous (left or right inverse?). Use a.inverse() * b or b * a.inverse() instead.")

    def inverse(self) -> MultiVector:
        """Returns the inverted multivector
        `X^-1` such that `X * X^-1 = 1` if
        it exists.

        Returns:
            inverted `MultiVector`
        """
        rev_self = ~self
        divisor = self * rev_self
        if not divisor.is_pure_scalar:
            raise Exception(
                "Can't invert multi-vector (inversion divisor V ~V not scalar: %s)." % divisor)
        return rev_self / divisor

    def __mul__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """Returns the geometric product.

        Args:
            other: object to multiply with

        Returns:
            geometric product of `self` and `other`
        """
        other = self.algebra.as_mv(other)

        result_blade_indices, result_blade_values = mv_multiply(
            self.blade_indices, self.blade_values,
            other.blade_indices, other.blade_values,
            self._algebra.cayley
        )

        return self.with_changes(
            blade_values=result_blade_values,
            blade_indices=result_blade_indices
        )

    def __rmul__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """See `__mul__()`."""
        other = self.algebra.as_mv(other)
        return other * self

    def reg_prod(self, other: MultiVector) -> MultiVector:
        """Returns the regressive product of the multivector and
        another multivector.

        Args:
            other: object to take regressive product with

        Returns:
            regressive product of multivector and other
        """
        other = self.algebra.as_mv(other)

        return (self.dual() ^ other.dual()).dual()

    def __and__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """See reg_prod()."""
        return self.reg_prod(other)

    def __rand__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """See reg_prod()."""
        other = self.algebra.as_mv(other)
        return other.reg_prod(self)

    def __or__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """Returns the inner product.umbers.Number, MultiVector, tf.Tensor]

        Args:
            other: object to calculate inner product with

        Returns:
            inner product of `self` and `other`
        """
        other = self.algebra.as_mv(other)

        result_blade_indices, result_blade_values = mv_multiply(
            self.blade_indices, self.blade_values,
            other.blade_indices, other.blade_values,
            self._algebra.cayley_inner
        )

        return self.with_changes(
            blade_values=result_blade_values,
            blade_indices=result_blade_indices
        )

    def __ror__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """See `__or__()`."""
        return self | other

    def __xor__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """Returns the exterior product.

        Args:
            other: object to calculate exterior product with

        Returns:
            exterior product of `self` and `other`
        """
        other = self.algebra.as_mv(other)

        result_blade_indices, result_blade_values = mv_multiply(
            self.blade_indices, self.blade_values,
            other.blade_indices, other.blade_values,
            self._algebra.cayley_outer
        )

        return self.with_changes(
            blade_values=result_blade_values,
            blade_indices=result_blade_indices
        )

    def __rxor__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """See `__xor__()`."""
        return -self ^ other

    def __eq__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> bool:
        """Returns whether the multivector is equal to another one.
        Two multivectors are equal if all their elements are equal
        for all multivectors in the batch.

        Args:
            other: object to compare equality to.

        Returns:
            Whether `self` is equal to another `other`
        """
        other = self.algebra.as_mv(other)

        return mv_equal(
            self.blade_indices, self.blade_values,
            other.blade_indices, other.blade_values
        )

    def __add__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """Returns the addition of the multivector and `other`.

        Args:
            other: object to add with

        Returns:
            Addition of the multivector and `other`
        """
        other = self.algebra.as_mv(other)

        result_indices, result_values = mv_add(
            self.blade_indices, self.blade_values,
            other.blade_indices, other.blade_values
        )

        return self.with_changes(
            blade_values=result_values,
            blade_indices=result_indices
        )

    def __radd__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """See `__add__()`."""
        return self + other

    def __neg__(self) -> MultiVector:
        """Returns the negative multivector.

        Returns:
            `MultiVector` negated
        """
        return self.with_changes(
            blade_values=-self.blade_values
        )

    def __sub__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """Returns the subtraction of the multivector and `other`.

        Args:
            other: object to subtract

        Returns:
            Subtraction of the multivector and `other`
        """
        neg_other = -self.algebra.as_mv(other)
        return self + neg_other

    def __rsub__(self, other: Union[numbers.Number, MultiVector, tf.Tensor]) -> MultiVector:
        """See `__sub__()`."""
        return -self + other

    def __abs__(self) -> MultiVector:
        """Returns the multivector with all of its values
        without sign.

        Returns:
            `MultiVector` with all of its values
            without sign
        """
        return self.with_changes(
            blade_values=tf.abs(self.blade_values)
        )

    def tensor(self, blade_names: Union[str, List[str]]) -> tf.Tensor:
        """Returns a tf.Tensor with the given blades on the last axis
        in the same order. Blade names can be unnormalized and will have
        correct sign on the output.

        Args:
            blade_names: Blade name or list of blade names to build a
            tensor for. Can be unnormalized and will return correct sign.
            Can contain duplicate blade names.

        Returns:
            tf.Tensor with the given blades on the last axis
            in the same order
        """
        # If we are only given a single string, make it into a list
        # so we can treat it the same way, but remember that we need
        # to remove the last axis later when returning the result.
        is_single_input = isinstance(blade_names, str)
        if is_single_input:
            blade_names = [blade_names]

        query_signs, query_ind = get_blade_indices_from_names(
            blade_names, self.algebra.blades)

        blade_values = []
        for blade_index in query_ind:
            # Find the blade indices of the query that are present
            # in this multivector. If an index is not present, use
            # zeros for that index's values.
            self_blade_index = tf.where(
                self.blade_indices == blade_index)[..., 0]

            blade_values.append(tf.cond(
                len(self_blade_index) > 0,
                lambda: self.blade_values[..., self_blade_index[0]],
                lambda: tf.zeros(self.batch_shape, dtype=tf.float32)
            ))

        # Combine the different blade values (will be same order as
        # query indices on the last axis) and multiply by the signs
        # the query produced.
        result = query_signs * tf.stack(blade_values, axis=-1)

        # Remove the last axis if we only had a single input blade name
        if is_single_input:
            result = result[..., 0]

        return result

    def __getitem__(self, key: Any) -> MultiVector:
        """Slices the multivector. Can slice by kind
        if a string or BladeKind was passed or by
        batch.

        Examples:
            # mv has batch_shape [10, 5] with blades e_1, e_2.
            mv[:3, ["e_1", "e_12"]] # batch shape [3, 5] blades e_1
            mv["e_1"] # batch shape [10, 5], blades e_1

        Args:
            key: Shape where the last index can be a string
            or list of strings to only keep certain
            blades. Will raise if duplicate blades are found.

        Returns:
            sliced `MultiVector`
        """
        def is_sequence(x):
            return (
                (not hasattr(x, "strip")) and
                hasattr(x, "__getitem__") and
                hasattr(x, "__iter__")
            )

        def is_nonempty_sequence(x):
            return is_sequence(x) and len(x) > 0

        def is_nonempty_str_sequence(x):
            return is_nonempty_sequence(x) and all(isinstance(s, str) for s in x)

        mv = self

        # Find blade index of passed blade strings in global blade index if
        # a string or a sequence of strings was passed in some way.
        # Also remove that part from the key that will later be used for
        # indexing the batch dimensions.
        # Could do this better with a recursive function that generalizes more too.
        blade_names = None
        if isinstance(key, str):
            # Key is a single string
            blade_names = [key]
            key = tuple()
        elif is_nonempty_str_sequence(key):
            # Key is sequence of strings
            blade_names = key
            key = tuple()
        elif is_nonempty_sequence(key) and isinstance(key[-1], str):
            # Single string at last index of key sequence
            blade_names = [key[-1]]
            key = key[:-1]
        elif is_nonempty_sequence(key) and is_nonempty_str_sequence(key[-1]):
            # Sequence of strings at last index of key sequence
            blade_names = key[-1]
            key = key[:-1]

        if blade_names is not None:
            _, blade_indices = get_blade_indices_from_names(
                blade_names, self.algebra.blades)
        else:
            blade_indices = None

        # Index multi-vector bases if we found an index for them above.
        if blade_indices is not None:
            # Don't allow duplicate indices
            if len(blade_indices) != len(tf.unique(blade_indices)[0]):
                raise Exception(
                    "Duplicate blade indices passed: %s" % blade_indices)

            # Tile our own sparse blade index across the search indices
            self_blade_indices = tf.tile(tf.expand_dims(
                self.blade_indices, axis=-1), [1, len(blade_indices)])

            blade_indices = tf.expand_dims(blade_indices, axis=0)

            # Find the indices of the search indices in our own index
            found_indices = tf.where(
                self_blade_indices == blade_indices)[..., 0]

            # if len(found_indices) < blade_indices.shape[1]:
            #    raise Exception("Could not find all passed blades. Passed blade indices: %s, available blade indices: %s" % (
            #        blade_indices[0], self.blade_indices))

            # Get new values and indices at the now known own indices
            new_indices = tf.gather(self.blade_indices, found_indices, axis=-1)
            new_values = tf.gather(self.blade_values, found_indices, axis=-1)

            mv = self.with_changes(
                blade_values=new_values,
                blade_indices=new_indices
            )

        # Use rest of key for normal indexing (usually used for batch indexing).
        # TODO: Need to change blade_indices if they key slices the indices.
        # Could just count the length of the key and look at batch_shape,
        # but that still misses ellipsis.
        return mv.with_changes(
            blade_values=mv.blade_values[key]
        )

    def __repr__(self) -> str:
        if len(self.blade_values.shape) == 1:
            def _blade_value_repr(value, index):
                blade_repr = get_blade_repr(self.algebra.blades[index])
                return "%.2f*%s" % (value, blade_repr)

            return "MultiVector[%s]" % " + ".join(
                _blade_value_repr(value, index)
                for value, index
                in zip(self.blade_values, self.blade_indices)
                if value != 0
            )
        else:
            return "MultiVector[batch_shape=%s, blades=[%s]]" % (self.batch_shape, ", ".join(get_blade_repr(self.algebra.blades[i]) for i in self.blade_indices))

    def tile(self, multiples: List[int]) -> MultiVector:
        """Replicates the multivector across batch shape.

        Example: mv with batch_shape[]
        - mv.tile([3, 4]) -> mv with batch shape [3, 4]

        Args:
            Tiled `MultiVector` according to `multiples`
        """
        expanded_shape = [1] * len(multiples) + [*self.blade_values.shape]
        expanded_multiples = [*multiples] + [1] * len(self.blade_values.shape)

        new_blade_values = tf.tile(
            tf.reshape(self.blade_values, expanded_shape),
            multiples=expanded_multiples
        )

        return self.with_changes(
            blade_values=new_blade_values
        )

    def approx_exp(self, order: int) -> MultiVector:
        """Returns an approximation of the exponential using a centered taylor series.

        Args:
            order: order of the approximation

        Returns:
            Approximation of `exp(self)`
        """
        v = self.algebra.as_mv(1.0)
        result = self.algebra.as_mv(1.0)
        for i in range(1, order + 1):
            v = self * v
            i_factorial = tf.exp(tf.math.lgamma(i + 1.0))
            result += v / i_factorial
        return result

    def approx_log(self, order: int) -> MultiVector:
        """Returns an approximation of the natural logarithm using a centered
        taylor series. Only converges for multivectors where `||mv - 1|| < 1`.

        Args:
            order: order of the approximation

        Returns:
            Approximation of `log(self)`
        """
        result = self.algebra.as_mv(0.0)

        self_minus_one = self - 1.0
        v = None

        for i in range(1, order + 1):
            v = self_minus_one if v is None else v * self_minus_one
            result += (((-1.0) ** i) / i) * v

        return -result

    def int_pow(self, n: int) -> MultiVector:
        """Returns the multivector to the power of an integer
        using repeated multiplication.

        Args:
            n: integer power to raise the multivector to

        Returns:
            `MultiVector` to the power of `n`
        """
        if not isinstance(n, int):
            raise Exception("n must be an integer.")
        if n < 0:
            raise Exception("Can't raise to negative powers.")

        if n == 0:
            return self.algebra.as_mv(1.0)

        result = self
        for i in range(n - 1):
            result *= self
        return result
