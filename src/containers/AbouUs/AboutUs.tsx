import styles from "./style.module.scss";
import Icon, { IconName } from "../../assets/svg/images";

type Card = {
  img: IconName;
  title: string;
  text: string;
};

const cards: Card[] = [
  {
    img: "scissors",
    title: "Jakość",
    text: "Wysoka jakość naszych usług",
  },
  {
    img: "glass",
    title: "Herbata i nie tylko",
    text: "W naszym barze znajduje się kawa herbata i napoje z %",
  },
  {
    img: "blank",
    title: "Certyfikowani specjaliści",
    text: "Nasi specjaliści posiadają profesjonalne umiejętności pracy",
  },
  {
    img: "bottle",
    title: "Pielęgnacja",
    text: "Mamy produkty dla domowej pielęgnacji wyższej jakości.",
  },
];

export const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <h2>O nas</h2>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2>B</h2>
          <h2>PANBARBER</h2>
        </div>
        <div className={styles.right}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Icon name={card.img} className={styles.icon} />
              </div>
              <div className={styles.content}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
