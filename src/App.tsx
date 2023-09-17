import { AboutUs } from "./containers/AbouUs/AboutUs";
import { Contact } from "./containers/Contact/Contact";
import { Footer } from "./containers/Footer/Footer";
import { Header } from "./containers/Header/Header";
import { Main } from "./containers/Main/Main";
import { MainSlider } from "./containers/MainSlider/MainSlider";
import { Service } from "./containers/Service/Service";

import styles from "./style.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <AboutUs />
      <MainSlider />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
