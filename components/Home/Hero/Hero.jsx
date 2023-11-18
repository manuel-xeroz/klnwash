import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero__container}>
      <div className={styles.hero}>
        <div className={styles.details}>
          <h3>
            Your Secure Mobile App for Convenient Laundry Pickup and Delivery
            Services
          </h3>
          <Image
            src="/landing/zigzag.png"
            alt="design"
            height={19}
            width={221}
          />

          <div className={styles.images__mobile}>
            <div className={styles.image__mobile}>
              <Image src="/landing/hero-phone.png" alt="phone" fill />

              <div className={styles.image1__mobile}>
                <Image src="/landing/washing.png" alt="phone" fill />
              </div>

              <div className={styles.image2__mobile}>
                <Image src="/landing/clothe.png" alt="phone" fill />
              </div>

              <div className={styles.image3__mobile}>
                <Image src="/landing/chart.png" alt="chart" fill />
              </div>

              <div className={styles.image4__mobile}>
                <Image
                  src="/landing/shield.png"
                  alt="shield"
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </div>

          <p className={styles.p__desktop}>
            Laundry is done your way. Delivered the next day. Pickup and
            Delivery with Kln Wash.
          </p>
          <div className={styles.stores__desktop}>
            <div className={styles.store}>
              <Image
                src="/landing/apple.png"
                alt="apple store"
                fill
                className={styles.store__image}
              />
            </div>

            <div className={styles.store}>
              <Image
                src="/landing/playstore.png"
                alt="playstore"
                fill
                className={styles.store__image}
              />
            </div>
          </div>
        </div>

        <div className={styles.images}>
          <div className={styles.image}>
            <Image src="/landing/hero-phone.png" alt="phone" fill />

            <div className={styles.image1}>
              <Image src="/landing/washing.png" alt="phone" fill />
            </div>

            <div className={styles.image2}>
              <Image src="/landing/clothe.png" alt="phone" fill />
            </div>

            <div className={styles.image3}>
              <Image src="/landing/chart.png" alt="chart" fill />
            </div>

            <div className={styles.image4}>
              <Image
                src="/landing/shield.png"
                alt="shield"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
