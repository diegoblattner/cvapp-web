import { RefObject } from "preact";
import { useEffect } from "preact/hooks";
import styles from './styles.module.scss';

export const useInvisibleOnResize = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    const resizeFinished = () => {
      ref.current?.classList.remove(styles.hidden);
    }

    const onWindowResize = () => {
      clearTimeout(timeout!);
      timeout = setTimeout(resizeFinished, 300);
      if (!ref.current?.classList.contains(styles.slidepanel__open)
        && !ref.current?.classList.contains(styles.hidden)) {
        ref.current?.classList.add(styles.hidden);
      }
    }
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    }
  }, []);
}
