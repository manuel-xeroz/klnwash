import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero__container}>
      <div className={styles.hero}>
        <div className={styles.hero__text}>
          <h3>Terms and Condition</h3>
          <Image
            src="/landing/zigzag.png"
            alt="design"
            height={19}
            width={221}
          />
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
