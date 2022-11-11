import { createFocusTrap } from "focus-trap";
import { useEffect } from "preact/hooks";

export const useFocusTrap = (ref, open, onBackButtonClick) => {
  useEffect(() => {
    let trap;

    if (ref.current && open) {
      trap = createFocusTrap(ref.current, {
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
        onPostDeactivate: onBackButtonClick,
      });
      trap.activate();
    }

    return () => {
      if (trap?.active) {
        trap.deactivate();
      }
    };
  }, [open]);
};
