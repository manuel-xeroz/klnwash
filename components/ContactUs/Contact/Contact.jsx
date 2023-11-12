import Image from "next/image";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.contact__links}>
          <div className={styles.contact__link}>
            <Image
              src="/contact/message.png"
              alt="mail icon"
              height={119}
              width={119}
            />
            <p>support@klnwash.com</p>
          </div>
          <div className={styles.contact__link}>
            <Image
              src="/contact/call.png"
              alt="mail icon"
              height={119}
              width={119}
            />
            <p>+234-8147037766</p>
          </div>
        </div>
        <div className={styles.contact__image}>
          <Image src="/contact/phone.png" alt="phone" fill />
        </div>
      </div>
    </section>
  );
};

export default Contact;
