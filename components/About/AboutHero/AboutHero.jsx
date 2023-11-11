import Image from "next/image";
import styles from "./AboutHero.module.scss";

const AboutHero = () => {
  return (
    <section className={styles.about__hero__container}>
      <div className={styles.about__hero}>
        <div className={styles.about__hero__left}>
          <span className={styles.texts}>
            <h3>About</h3>
            <h3 className={styles.us}>Us</h3>
          </span>
          <Image
            src="/landing/zigzag.png"
            alt="design"
            height={19}
            width={221}
          />
        </div>
        <div className={styles.images}>
          <div className={styles.illustration}>
            <Image
              src="/about/hero-image.png"
              alt="illustration"
              fill
            />
          </div>
          <div className={styles.shield}>
            <Image
              src="/about/shield.png"
              alt="shield"
              fill
            />
          </div>
          <div className={styles.star}>
            <Image src="/about/star.png" alt="star" height={50} width={50} />
          </div>
          <div className={styles.calendar}>
            <Image
              src="/about/calendar.png"
              alt="calendar"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
