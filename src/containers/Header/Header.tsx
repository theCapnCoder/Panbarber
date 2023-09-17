import styles from "./style.module.scss";
import img from "../../assets/img/header_bg.png";
import clsx from "clsx";
import { Main } from "../Main/Main";

const menuItems = [
  {
    url: "#",
    name: "O Nas",
  },
  {
    url: "#",
    name: "Usługi",
  },
  {
    url: "#",
    name: "Opinie",
  },
  {
    url: "#",
    name: "Kontakt",
  },
];

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2 className={clsx(styles.text_logo, styles.logo_p)}>P</h2>
          <h2 className={clsx(styles.text_logo, styles.logo_b)}>B</h2>
        </div>

        <div className={styles.menu}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Main />

      <div className={styles.contact}>
        <h3>Zadzwoń</h3>
      </div>
    </header>
  );
};
