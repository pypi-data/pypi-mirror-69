from functools import wraps
from IPython import get_ipython
import ipywidgets.widgets as w
from traitlets import Bool
from .util import _DisplayMixin

class Output(w.Output, _DisplayMixin):
    err_stop = Bool(True, help="Stop execution when exception is raised.").tag(sync=True)

    def __init__(self, no_scroll=True, **kw):
        super().__init__(**kw)
        if no_scroll:
            self.add_class('output_scroll_disabled')

    def __exit__(self, etype, evalue, tb):
        """Called upon exiting output widget context manager."""
        ip = get_ipython()

        # print(type(etype), type(evalue), hasattr(evalue, '__already_shown_by_ipywidgets_output'), evalue.__already_shown_by_ipywidgets_output)
        if etype is not None and not hasattr(evalue, '_already_shown_by_ipywidgets_output'):
            if ip:
                evalue.__already_shown_by_ipywidgets_output = True
                ip.showtraceback((etype, evalue, tb), tb_offset=0)
        self._flush()
        self.msg_id = ''
        # if self.err_stop:
        #     raise ExceptionAlreadyShownByOutput(etype, evalue, tb)
        return not self.err_stop if ip else None

    def function(self, func):
        @wraps(func)
        def inner(*ai, **kwi):
            with self:
                return func(*ai, **kwi)
        return inner


class ShrinkWrap(Output):
    layout = w.Layout(display='flex', overflow_x='auto')
