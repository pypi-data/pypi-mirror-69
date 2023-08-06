"""For of traitlet's link and dlink to enable linking traits.

"""

import contextlib

import traits.api as t
UNDEFINED = (t.Undefined, None)
try:
    import traitlets
    UNDEFINED += (traitlets.Undefined,)

    def has_traitlets(obj):
        return isinstance(obj, traitlets.HasTraits)
except ImportError:
    def has_traitlets(obj):
        return False

# Raise exception instead of logging them
t.push_exception_handler(reraise_exceptions=True)

def _get_traitlet_default(traitlet):
    return traitlet[0].traits()[traitlet[1]].default_value

def has_traits(obj):
    return isinstance(obj, t.HasTraits)


class link:
    """Link traits from different objects together so they remain in sync.

    This is a sublclass of traitlets.links that adds support for linking
    traitlets traits and enthought traits.

    Parameters
    ----------
    source : (object / attribute name) pair
    target : (object / attribute name) pair

    Examples
    --------

    >>> c = link((src, 'value'), (tgt, 'value'))
    >>> src.value = 5  # updates other objects as well

    See Also
    --------
    link

    """
    updating = False

    def __init__(self, source, target, transform=None):
        # _validate_link(source, target)
        self.source, self.target = source, target
        self._transform, self._transform_inv = (
            transform if transform else (lambda x: x,) * 2)

        self.link()

    def link(self):
        try:
            source_value = getattr(self.source[0], self.source[1])
            if source_value not in UNDEFINED:
                setattr(self.target[0], self.target[1],
                        self._transform(source_value))
        finally:
            if has_traits(self.source[0]):
                self.source[0].on_trait_change(
                    self._update_target_traits, name=self.source[1])
            elif has_traitlets(self.source[0]):
                self.source[0].observe(
                    self._update_target, names=self.source[1])
            else:
                raise ValueError(
                    "source must contains either traits or traitlets.")
            if has_traits(self.target[0]):
                self.target[0].on_trait_change(
                    self._update_source_traits, name=self.target[1])
            elif has_traitlets(self.target[0]):
                self.target[0].observe(self._update_source,
                                       names=self.target[1])
            else:
                raise ValueError(
                    "target must contains either traits or traitlets.")

    def _check_source_consistency(self, value):
        if getattr(self.source[0], self.source[1]) != value:
            raise t.TraitError(
                "Broken link {}: the source value changed while updating "
                "the target.".format(self))

    def _check_target_consistency(self, value):
        if getattr(self.target[0], self.target[1]) != value:
            raise t.TraitError(
                "Broken link {}: the target value changed while updating "
                "the source.".format(self))

    @contextlib.contextmanager
    def _busy_updating(self):
        self.updating = True
        try:
            yield
        finally:
            self.updating = False

    def _update_target(self, change):
        if self.updating:
            return
        if change.new is traitlets.Undefined:
            if has_traitlets(self.target[0]):
                target_value = _get_traitlet_default(self.target)
            else:
                target_value = t.Undefined
        else:
            target_value = self._transform(change.new)
        with self._busy_updating():
            setattr(self.target[0], self.target[1], target_value)
            self._check_source_consistency(value=change.new)

    def _update_source(self, change):
        if self.updating:
            return
        if change.new is traitlets.Undefined:
            if has_traitlets(self.source[0]):
                source_value = _get_traitlet_default(self.source)
            else:
                source_value = t.Undefined
        else:
            source_value = self._transform_inv(change.new)
        with self._busy_updating():
            setattr(self.source[0], self.source[1], source_value)
            self._check_target_consistency(value=change.new)

    def _update_target_traits(self, new):
        if self.updating:
            return
        if new is t.Undefined:
            if has_traitlets(self.target[0]):
                target_value = _get_traitlet_default(self.target)
            else:
                target_value = new
        else:
            target_value = self._transform(new)
        with self._busy_updating():
            setattr(self.target[0], self.target[1], target_value)
            self._check_source_consistency(value=new)

    def _update_source_traits(self, new):
        if self.updating:
            return
        if new is t.Undefined:
            if has_traitlets(self.source[0]):
                source_value = _get_traitlet_default(self.source)
            else:
                source_value = new
        else:
            source_value = self._transform_inv(new)
        with self._busy_updating():
            setattr(self.source[0], self.source[1], source_value)
            self._check_target_consistency(value=new)

    def unlink(self):
        if isinstance(self.source[0], t.HasTraits):
            self.source[0].on_trait_change(
                self._update_target_traits, name=self.source[1], remove=True)
        else:
            self.source[0].unobserve(self._update_target, names=self.source[1])
        if isinstance(self.target[0], t.HasTraits):
            self.target[0].on_trait_change(
                self._update_source_traits, name=self.target[1], remove=True)
        else:
            self.target[0].unobserve(self._update_source, names=self.target[1])


class dlink:
    """Link the trait of a source object with traits of target objects.

    This is a sublclass of traitlets.link that adds support for
    linking traitlets traits and enthought traits.

    Parameters
    ----------
    source : (object, attribute name) pair
    target : (object, attribute name) pair
    transform: callable (optional)
        Data transformation between source and target.
    Examples
    --------
    >>> c = link((src, 'value'), (tgt, 'value'))
    >>> src.value = 5  # updates target objects
    >>> tgt.value = 6  # does not update source object

    See Also
    --------
    link

    """

    def __init__(self, source, target, transform=None):
        self._transform = transform if transform else lambda x: x
        self.source, self.target = source, target
        self.link()

    def link(self):
        try:
            source_value = getattr(self.source[0], self.source[1])
            if source_value not in UNDEFINED:
                setattr(self.target[0], self.target[1],
                        self._transform(source_value))
        finally:
            if has_traits(self.source[0]):
                self.source[0].on_trait_change(
                    self._update_traits, name=self.source[1])
            elif has_traitlets(self.source[0]):
                self.source[0].observe(self._update, names=self.source[1])
            else:
                raise ValueError(
                    "source must contains either enthought traits or "
                    "traitlets.")

    def _update(self, change):
        if change.new is traitlets.Undefined and has_traitlets(self.target[0]):
            target_value = _get_traitlet_default(self.target)
        else:
            target_value = self._transform(change.new)
        setattr(self.target[0], self.target[1], target_value)

    def _update_traits(self, name, new):
        if new is t.Undefined and has_traitlets(self.target[0]):
            target_value = _get_traitlet_default(self.target)
        else:
            target_value = self._transform(new)
        setattr(self.target[0], self.target[1], target_value)

    def unlink(self):
        if has_traits(self.source[0]):
            self.source[0].on_trait_change(
                self._update_traits, name=self.source[1], remove=True)
        else:
            self.source[0].unobserve(self._update, names=self.source[1])
