import Image from "next/image";
import styles from "./AppAdvert.module.scss";

const AppAdvert = () => {
  return (
    <section className={styles.advert__container}>
      <div className={styles.advert}>
        <div className={styles.overlay__left}></div>
        <div className={styles.overlay__right}></div>
        <div></div>
        <div className={styles.advert__inner}>
          <h3>Ready to simplify your laundry routine?</h3>
          <p>
            Download the Kln Wash app now and enjoy a hassle-free laundry
            experience like never before. Together, let&apos;s make a positive
            impact on the environment while enjoying the convenience of our
            eco-friendly laundry services.
          </p>
          <Image src="/landing/zigzag-arrow.png" alt="arrow" height={45} width={163} />

          <div className={styles.stores}>
            <div className={styles.apple}>
              <Image src="/landing/apple.png" alt="apple store" fill />
            </div>

            <div className={styles.playstore}>
              <Image src="/landing/playstore.png" alt="playstore" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppAdvert;
