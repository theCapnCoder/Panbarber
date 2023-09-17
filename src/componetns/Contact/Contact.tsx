import styles from "./style.module.scss";

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.contactWrapper}>
          <h3>PANBARBER</h3>
          <h3>Divider</h3>
          <h3>Godziny pracy</h3>
          <p>Pn - Pt: 9:00 - 20:00</p>
          <p>Sb: 10:00 - 19:00</p>
          <p>Nd: do ustalenia</p>
        </div>

        <form action="" className={styles.form}>
          <input type="text" placeholder="Imię i Nazwisko " />
          <input type="text" placeholder="Numer telefonu" />
          <input type="text" placeholder="Data i czas" />
          <input type="text" placeholder="E-mail" />
          <textarea placeholder="E-mail"></textarea>
          <p>Lorem ipsum adipisicing elit. Dolores, molestiae?</p>
        </form>
      </div>

      <div>
        <h3>Slider</h3>
      </div>
    </section>
  );
};
