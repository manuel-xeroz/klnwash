import Image from "next/image";
import styles from "./Advantage.module.scss";

const Advantage = () => {
  return (
    <section className={styles.advantage__container}>
      <div className={styles.advantage}>
        <div className={styles.comfort__container}>
          <div className={styles.comfort__texts}>
            <h3>Comfort and efficiency</h3>
            <p>
              Traditional laundry services often require individuals to visit a
              physical laundromat or spend time washing and drying clothes at
              home. This can be inconvenient and time-consuming, especially for
              busy professionals and individuals without access to laundry
              facilities. Kln Wash offers a seamless laundry delivery service
              through our easy-to-use mobile app, saving customers valuable time
              and effort. By providing efficient and convenient laundry
              solutions, we improve people&aspo;s lifestyles and free them up
              for more important activities.
            </p>
          </div>
          <div className={styles.comfort__image}>
            <Image src="/about/second-phone.png" alt="phone" fill />
          </div>
        </div>

        <div className={styles.vision__container}>
          <div className={styles.comfort__image}>
            <Image src="/about/third-phone.png" alt="phone" fill />
          </div>
          <div className={styles.comfort__texts}>
            <div className={styles.mission}>
              <h3>Our Mission</h3>
              <p>
                Our mission is to improve the lives of the clients we serve and
                bring convenience to them by offering the best laundry service
                in the industry.
              </p>
            </div>

            <div>
              <h3>Our Vission</h3>
              <p>
                To lead the laundry service sector in Africa and become the
                go-to company for laundry services by relentlessly pursuing
                excellence in everything we do. We will continue to be regarded
                for our moral codes, admired for our ideas, honored for our
                professionalism, and recognized for our achievements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
