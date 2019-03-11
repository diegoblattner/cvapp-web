import { h, Component } from 'preact';
import styles from './styles.scss';

const openClass = styles['slidepanel--open'];

const SlidePanel = ({ open, className = '', component }) => (
  <div className={`${styles.slidepanel} ${className} ${open ? openClass : ''}`}>
    {component}
  </div>
);

export { SlidePanel };
