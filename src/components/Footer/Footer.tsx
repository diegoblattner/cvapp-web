import { Link } from "@ui/Button/Button";
import { List } from "@ui/List/List";
import styles from "./styles.module.scss";

const Footer = () => (
  <footer>
    <List>
      <li className={styles.li}>
        This website doesn't track you.
      </li>
      <li className={styles.li}>
        This website is a personal side project with educational and portifolio purposes only. It may not reflect the most up to date data at all times. No information contained in this page can be used for any legal purposes.
      </li>
      <li className={styles.li}>
        The source code for this webpage can be found on <Link href="https://github.com/diegoblattner/cvapp-web" text="GitHub" />
      </li>
      <li className={styles.li}>
        The icons used in this webpage come from <Link href="https://icomoon.io/" text="IcoMoon" />
      </li>
    </List>
  </footer>
);

export { Footer };
