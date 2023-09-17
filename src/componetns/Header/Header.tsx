import styles from "./style.module.scss";

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
    <section className={styles.header}>
      <div className={styles.logo}>
        <p>Logo</p>
      </div>

      <div className={styles.menu}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
