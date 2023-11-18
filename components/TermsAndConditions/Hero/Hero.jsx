import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero__container}>
      <div className={styles.hero}>
        <div className={styles.hero__text}>
          <h3>Terms and Condition</h3>
          <div className={styles.zigzag}>
            <Image
              src="/landing/zigzag.png"
              alt="design"
              fill
            />
          </div>
        </div>
        <div className={styles.hero__image}>
          <Image
            src="/T&C/t&c.png"
            alt="list illustration"
            fill
            className={styles.list__image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
