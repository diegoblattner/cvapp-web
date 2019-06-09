import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { RoleDetails } from '../Role/RoleDetails';
import styles from './ExperienceDetails.scss';
import { Button } from '../../ui/Button/Button';
import { iconsEnum } from '../../ui/Icons/Icons';

function getScrollParent(node) {
  if (node === null) {
    return null;
  }

  if (node.scrollHeight > node.clientHeight) {
    return node;
  }
  return getScrollParent(node.parentNode);
}

const ExperienceDetails = ({ experience, selected }) => {
  const containerRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(selected);

  const goTo = index => {
    const scrollingParent = getScrollParent(containerRef.current);
    if (scrollingParent) {
      scrollingParent.scroll(window.scrollX, 0);
    }
    setSelectedIndex(index);
  };

  // Updates the container height to match the selected role height
  useEffect(() => {
    const ul = containerRef.current.querySelector('ul');
    const li = ul.getElementsByClassName(styles.experiencedetails__roles__role)[
      selectedIndex
    ];
    ul.style.height = `${li.clientHeight}px`;
  }, [selectedIndex]);

  const showPrev = selectedIndex > 0;
  const showNext = selectedIndex < experience.length - 1;
  const liWidth = 100 / experience.length;

  return (
    <div ref={containerRef} className={styles.experiencedetails}>
      <ul
        className={styles.experiencedetails__roles}
        style={{
          transform: `translateX(-${liWidth * selectedIndex}%)`,
          width: `${experience.length * 100}%`,
        }}
      >
        {experience.map((role, index) => (
          <li
            className={styles.experiencedetails__roles__role}
            style={{
              width: `calc(${liWidth}% - 1rem)`,
            }}
          >
            <RoleDetails {...role} key={index} />
          </li>
        ))}
      </ul>
      <div>
        {showPrev && (
          <Button
            className={styles.experiencedetails__prev}
            text="Prev"
            icon={iconsEnum.arrow}
            onClick={() => goTo(selectedIndex - 1)}
          />
        )}
        {showNext && (
          <Button
            className={styles.experiencedetails__next}
            text="Next"
            icon={iconsEnum.arrow}
            onClick={() => goTo(selectedIndex + 1)}
          />
        )}
      </div>
    </div>
  );
};

export { ExperienceDetails };
