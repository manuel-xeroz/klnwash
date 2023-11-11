import Image from "next/image";
import styles from "./Effctiveness.module.scss";

const Effectiveness = () => {
  return (
    <section className={styles.effectiveness__container}>
      <div className={styles.effectiveness}>
        <h3 className={styles.title}>The effectiveness of the Kln Wash solution is significant</h3>
        <div className={styles.effectiveness__item}>
          <div className={styles.texts}>
            <h3>1. Protecting the environment:</h3>
            <p>
              Kln Wash reduces water consumption, energy consumption, and CO2
              emissions associated with laundry operations through
              energy-efficient technology and eco-friendly practices. This helps
              conserve critical natural resources, mitigate climate change, and
              protect ecosystems.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/about/Character.png"
              alt="character"
              fill
            />
          </div>
        </div>
        <div className={styles.effectiveness__item2}>
          <div className={styles.heart}>
            <Image
              src="/about/heart.png"
              alt="heart"
              fill
            />
          </div>
          <div className={styles.texts}>
            <h3>2. Public health and welfare</h3>
            <p>
              Conventional laundry often uses detergents containing harsh
              chemicals that can be harmful to human health and the environment.
              Kln Wash addresses these concerns by using eco-friendly cleaning
              products, promoting a healthier living environment, and reducing
              the risk of chemical exposure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effectiveness;
