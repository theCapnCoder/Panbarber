import { Button } from "../../components/Button/Button";
import styles from "./style.module.scss";
import clsx from "clsx";

export const Main = () => {
  return (
    <section className={styles.main}>
      <h1>PANBARBER</h1>
      <p>
        PanBarber, Classical Barbershop w którym poczujesz siebie Panem całego
        świata.
      </p>

      <Button>Zarezerwuj wizytę</Button>

    </section>
  );
};
