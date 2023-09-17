import { AboutUs } from "./componetns/AbouUs/AboutUs";
import { Contact } from "./componetns/Contact/Contact";
import { Footer } from "./componetns/Footer/Footer";
import { Header } from "./componetns/Header/Header";
import { Main } from "./componetns/Main/Main";
import { MainSlider } from "./componetns/MainSlider/MainSlider";
import { Service } from "./componetns/Service/Service";

import styles from "./style.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <AboutUs />
      <MainSlider />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;