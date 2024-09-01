import styles from "./styles/style";
import { Business, Footer, Navbar, Hero, Shop, Desc, Dji } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-hero-pattern  bg-cover bg-no-repeat bg-center`}
    >
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Dji />
        <Shop />
        <Business />
        <Desc />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
