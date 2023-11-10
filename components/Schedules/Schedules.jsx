import Image from "next/image";
import styles from "./Schedules.modules.scss";

const Schedules = () => {
  return (
    <section className={styles.schedule__container}>
      <div className={styles.schedule}>

        <h3>Schedules</h3>
        <p>
          With Kln Wash, you have the flexibility to schedule your laundry
          pickups and deliveries according to your preferences.
        </p>

        <div className={styles.details}>
          <div className={styles.details__left}>
            <Image
              src="/landing/green-star.png"
              alt="star"
              height={80}
              width={80}
            />
            <p>
              Whether you prefer weekly laundry service or need an urgent
              laundry solution, we have you covered. Simply specify your desired
              pickup and delivery hours and locations, and our efficient team
              will handle the rest.
            </p>
          </div>
          <div className={styles.details__middle}>
            <Image
              src="/landing/schedule.png"
              alt="schedule"
              height={100}
              width={100}
            />
          </div>
          <div className={styles.details__right}>
            <Image
              src="/landing/green-star.png"
              alt="star"
              height={80}
              width={80}
            />
            <p>
              We even offer on-demand dry cleaning services for those unexpected
              spills on your favorite garments. Rest assured, we prioritize
              quick and reliable service to meet your demands promptly.
            </p>
          </div>
        </div>
        <Image src='/landing/arrow-down.png' alt="arrow" height={72.9} width={163.5}/>
        <Image src='/landing/arrow-up.png' alt="arrow" height={72.9} width={163.5}/>
      </div>
    </section>
  );
};

export default Schedules;
