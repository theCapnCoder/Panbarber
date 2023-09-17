import Icon, { IconName } from "../../assets/svg/images";
import map from "../../assets/img/map.jpg";

import styles from "./style.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.map}>
        <img src={map} alt="map" />
      </div>

      <div className={styles.contact}>
        <h3>PANBARBER</h3>
        <h3>Divider</h3>
        <h3>Kontakt</h3>

        <div className={styles.info}>
          <div>
            <Icon name="clock" className={styles.icon} />
            <div className={styles.opening}>
              <p>Pn - Pt: 9:00 - 20:00</p>
              <p>Sb: 10:00 - 19:00</p>
              <p>Nd: do ustalenia</p>
            </div>
          </div>

          <div>
            <Icon name="email" className={styles.icon} />
            <h3 className={styles.text}>pannbarber@gmail.com</h3>
          </div>

          <div>
            <Icon name="phone" className={styles.icon} />
            <h3 className={styles.text}>(+48) 883883883</h3>
          </div>

          <div>
            <Icon name="map" className={styles.icon} />
            <h3 className={styles.text}>Marszałkowska 94/82,</h3>
            <h3 className={styles.text}>00-514, Warszawa</h3>
          </div>
        </div>

        <div className={styles.social}>
          <Icon name="instagram" className={styles.icon} />
          <Icon name="facebook" className={styles.icon} />
        </div>
      </div>
    </footer>
  );
};
