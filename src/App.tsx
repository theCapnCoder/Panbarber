import { AboutUs } from "./componetns/AbouUs/AboutUs";
import { Header } from "./componetns/Header/Header";
import { Main } from "./componetns/Main/Main";

import styles from "./style.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <AboutUs />
    </div>
  );
}

export default App;
