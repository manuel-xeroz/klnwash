import Image from "next/image";
import styles from "./FaqHero.module.scss";

const FaqHero = () => {
  return (
    <section className={styles.hero__container}>
      <div className={styles.hero}>
        <div className={styles.texts}>
          <h3>Frequently Asked</h3>
          <h3 className={styles.questions}>Questions</h3>
          <Image
            src="/landing/zigzag.png"
            alt="design"
            height={19}
            width={229}
          />
        </div>
        <div className={styles.image}>
          <Image
            src="/faq/faq-hero.png"
            alt="FAQ illustration"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default FaqHero;
