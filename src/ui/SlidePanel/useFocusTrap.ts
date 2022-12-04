import { createFocusTrap } from "focus-trap";
import { RefObject } from "preact";
import { useEffect } from "preact/hooks";

export const useFocusTrap = (ref: RefObject<HTMLElement>, open: boolean, onBackButtonClick: () => void) => {
  useEffect(() => {
    let trap: ReturnType<typeof createFocusTrap>;

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
