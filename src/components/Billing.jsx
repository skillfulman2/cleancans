import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Currently serving the <br className="sm:block hidden" /> following locations
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <li>Bellbrook</li>
        <li>Centerville</li>
        <li>Kettering</li>
        <li>Beavercreek</li>
      </p>

      
    </div>
  </section>
);

export default Billing;
