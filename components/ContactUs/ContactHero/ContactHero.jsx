import Image from "next/image";
import styles from "./ContactHero.module.scss";

const ContactHero = () => {
  return (
    <section className={styles.contact__container}>
      <div className={styles.contact}>
        <div className={styles.contact__left}>
          <span className={styles.contact__left__text}>
            <h3>Contact</h3> <h3 className={styles.us}>Us</h3>
          </span>
          <div className={styles.zigzag}>
            <Image src="/landing/zigzag.png" alt="design" fill />
          </div>
        </div>
        <div className={styles.contact__right}>
          <div className={styles.speech}>
            <Image src="/contact/speech.png" alt="speech" fill />
          </div>
          <div className={styles.call}>
            <Image src="/contact/call-angled.png" alt="call" fill />
          </div>
          <div className={styles.star}>
            <Image src="/contact/star.png" alt="star" fill />
          </div>
          <div className={styles.message}>
            <Image src="/contact/message-angled.png" alt="message" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
