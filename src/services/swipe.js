const maxSwipeDuration = 800;
const minSwipeRatio = 20;

export const onSwipe = (element, { left, right, up, down }) => {
  let startTime;

  // Swipe Up / Down / Left / Right
  let initialX = null;
  let initialY = null;

  function startTouch(e) {
    startTime = Date.now();
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  }

  function endTouch(e) {
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

      if (diffX > 0 && left) {
        // swiped left
        left();
      }

      if (diffX < 0 && right) {
        // swiped right
        right();
      }
    } else {
      if (deltaY < minSwipeRatio) return;

      if (diffY > 0 && up) {
        // swiped up
        up();
      }

      if (diffY < 0 && down) {
        // swiped down
        down();
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
