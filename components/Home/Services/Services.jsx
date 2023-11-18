import Image from "next/image";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <section className={styles.services__container}>
      <div className={styles.services}>
        <div className={styles.services__container_inner}>
          <Image
            src="/landing/star2.png"
            alt="star"
            height={64}
            width={64}
            className={styles.star}
          />
          <h3>
            At Kln Wash, we offer effortless laundry scheduling, pickup, and
            delivery services every day of the week. Save both money and time
            with our reliable solutions.
          </h3>
          <div className={styles.zigzag}>
            <Image src="/landing/zigzag.png" alt="design" fill />
          </div>
          <p>
            Our vast network of connected laundry businesses ensures
            high-quality service and convenience. We collect your dirty laundry
            items, deliver them to the best laundromat of your choice, and have
            them cleaned, pressed, and folded before promptly delivering them to
            your home. Experience the convenience and quality of Kln Wash, your
            trusted laundry partner.
          </p>

          {/* <div className={styles.services__overlay}></div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
