import { ComponentChildren, h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { onSwipe } from '../../services/swipe';
import { Button } from '../Button/Button';
import { iconsEnum } from '../Icons/Icons';
import styles from './styles.module.scss';

function getScrollParent(node: HTMLElement | null): HTMLElement | null {
  if (node === null) {
    return null;
  }

  if (node.scrollHeight > node.clientHeight) {
    return node;
  }
  return getScrollParent(node.parentElement);
}

type CarouselProps = {
  className?: string;
  children: ComponentChildren[];
  currentIndex: number;
  onChange?: (newIndex: number) => void;
  nextLabel?: string;
  prevLabel?: string;
  swipeable?: boolean;
};

const Carousel = ({
  className = "",
  children,
  currentIndex,
  onChange,
  nextLabel = "Next",
  prevLabel = "Prev",
  swipeable = false,
}: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(currentIndex);

  useEffect(() => {
    setSelectedIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    // Updates the container height to match the selected item height
    const ul = containerRef.current!.querySelector('ul')!;
    const li = ul.getElementsByClassName(styles.carousel__items__item)[
      selectedIndex
    ];

    if (!li) return;

    const scrollingParent = getScrollParent(containerRef.current);
    if (scrollingParent) {
      scrollingParent.scroll({ left: window.scrollX, top: 0, behavior: "smooth" });
    }
    setTimeout(() => {
      ul.style.height = `${li.clientHeight}px`;
    }, 250);
  }, [selectedIndex]);

  const goTo = (increment: number) => {
    onChange?.((selectedIndex + increment));
    setSelectedIndex((prev) => prev + increment);
  };

  useEffect(() => {
    if (swipeable) {
      const cleanup = onSwipe(containerRef.current!, {
        left: () => goTo(1),
        right: () => goTo(-1),
      });

      return cleanup;
    }

    return undefined;
  }, []);

  const showPrev = selectedIndex > 0;
  const showNext = selectedIndex < children.length - 1;
  const liWidth = 100 / children.length;

  return (
    <div ref={containerRef} className={`${styles.carousel} ${className}`}>
      <ul
        className={styles.carousel__items}
        style={{
          transform: `translateX(-${liWidth * selectedIndex}%)`,
          width: `${children.length * 100}%`,
        }}
      >
        {children.map((item, index) => (
          <li
            key={index}
            className={styles.carousel__items__item}
            style={{ width: `calc(${liWidth}% - 1rem)` }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div>
        {showPrev && (
          <Button
            className={styles.carousel__prev}
            text={prevLabel}
            icon={iconsEnum.arrow}
            onClick={() => goTo(-1)}
          />
        )}
        {showNext && (
          <Button
            className={styles.carousel__next}
            text={nextLabel}
            icon={iconsEnum.arrow}
            onClick={() => goTo(1)}
          />
        )}
      </div>
    </div>
  );
};

export { Carousel };
