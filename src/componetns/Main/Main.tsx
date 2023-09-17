import styles from "./style.module.scss";

export const Main = () => {
  return (
    <section className={styles.main}>
      <h1>PANBARBER</h1>
      <p>
        PanBarber, Classical Barbershop w którym poczujesz siebie Panem całego
        świata.
      </p>

      <button>Zarezerwuj wizytę</button>

      <div className={styles.contact}>
        <h3>Zadzwoń</h3>
      </div>
    </section>
  );
};
