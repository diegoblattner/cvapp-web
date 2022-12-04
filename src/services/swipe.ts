const maxSwipeDuration = 800;
const minSwipeRatio = 20;

type Handlers = {
  left?: () => void;
  right?: () => void;
  up?: () => void;
  down?: () => void;
}

export const onSwipe = (element: HTMLElement, { left, right, up, down }: Handlers) => {
  let startTime: number;

  // Swipe Up / Down / Left / Right
  let initialX: number | null = null;
  let initialY: number | null = null;

  function startTouch(e: TouchEvent) {
    startTime = Date.now();
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  }

  function endTouch(e: TouchEvent) {
    if (initialX === null) {
      return;
    }

    if (initialY === null) {
      return;
    }

    if (Date.now() - startTime > maxSwipeDuration) {
      return;
    }

    const currentX = e.changedTouches[0].clientX;
    const currentY = e.changedTouches[0].clientY;

    const diffX = initialX - currentX;
    const diffY = initialY - currentY;
    const deltaX = Math.abs(diffX);
    const deltaY = Math.abs(diffY);

    if (deltaX > deltaY) {
      if (deltaX < minSwipeRatio) return;

      if (diffX > 0) {
        // swiped left
        left?.();
      }

      if (diffX < 0) {
        // swiped right
        right?.();
      }
    } else {
      if (deltaY < minSwipeRatio) return;

      if (diffY > 0) {
        // swiped up
        up?.();
      }

      if (diffY < 0) {
        // swiped down
        down?.();
      }
    }

    initialX = null;
    initialY = null;
  }

  element.addEventListener("touchstart", startTouch, { passive: true });
  element.addEventListener("touchend", endTouch, { passive: true });

  return () => { // cleanup funtion
    element.removeEventListener("touchstart", startTouch);
    element.removeEventListener("touchend", endTouch);
  };
};
