import { AboutUs } from "./componetns/AbouUs/AboutUs";
import { Header } from "./componetns/Header/Header";
import { Main } from "./componetns/Main/Main";
import { MainSlider } from "./componetns/MainSlider/MainSlider";

import styles from "./style.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <AboutUs />
      <MainSlider />
    </div>
  );
}

export default App;
