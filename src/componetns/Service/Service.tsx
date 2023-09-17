import { list } from "./constants";
import styles from "./style.module.scss";

export const Service = () => {
  return (
    <section className={styles.service}>
      <h2>Usługi</h2>
      <h3>Divider</h3>

      <div className={styles.split}>
        <h2>Slider</h2>
        <div className={styles.content}>
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                {item.name}
                {item.text}
                {item.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
