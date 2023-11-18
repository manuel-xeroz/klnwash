import Image from "next/image";
import styles from "./AboutDetails.module.scss";

const AboutDetails = () => {
  return (
    <section className={styles.details__container}>
      <div className={styles.details}>
        <div className={styles.detail__top}>
          <div className={styles.detail__top_items}>
            <div className={styles.detail__texts}>
              <h3 className={styles.title}>
                Welcome to Kln Wash, where convenience meets excellence in
                laundry services
              </h3>

              <div className={styles.detail__image_mobile}>
                <Image src="/about/first-phone.png" alt="phone" fill />
              </div>

              <p>
                We are a regular home pick-up and delivery service, designed to
                revolutionize the way you handle your laundry. With our
                top-notch facility and unwavering commitment, we provide a
                seamless experience tailored to your needs.
              </p>
              <p>
                At Kln Wash, we understand the demands of your busy lifestyle.
                That&apos;s why we offer on-demand pickup and delivery,
                available 7 days a week. No more wasting time and effort on
                laundry chores. Our easy scheduling process allows you to set
                pickup and drop-off times at your convenience, ensuring that
                your laundry is ready precisely when you need it.
              </p>
            </div>
            <div className={styles.detail__image}>
              <Image src="/about/first-phone.png" alt="phone" fill />
            </div>
          </div>
          <Image
            src="/landing/zigzag.png"
            alt=""
            height={19}
            width={221}
            className={styles.zigzag}
          />
        </div>
        <p>
          Our dedicated team takes pride in delivering exceptional service from
          start to finish. With meticulous attention to detail, our delivery and
          pickup operations are executed with utmost care to provide you with
          that signature Kln Wash client experience. We value your trust, and it
          is our mission to exceed your expectations every step of the way
        </p>
        <p>
          We believe that laundry should never be a burden. Instead, it should
          be a seamless and hassle-free process. That&apos;s why we have made
          ourselves available around the clock to address any questions, issues,
          or recommendations you may have. Our friendly and knowledgeable team
          is here to assist you in getting your clothes clean, fresh, and ready
          to wear.
        </p>
        <p>
          If you&apos;re tired of the traditional laundry routine and seeking a
          reliable service that goes the extra mile, look no further. Trust Kln
          Wash to pick up your first item today and experience the convenience
          and quality that sets us apart.
        </p>
        <p>
          Join us in embracing a laundry experience like no other. Let Kln Wash
          redefine the way you approach clean and fresh clothes. Your
          convenience is our priority, and we are committed to providing you
          with outstanding service that saves you time and effort.
        </p>
        <h3>Welcome to the future of laundry services. Welcome to Kln Wash.</h3>
        <div className={styles.aboutUs}>
          <Image
            src="/about/gray-logo.png"
            alt="logo"
            height={215}
            width={212}
          />
          <h3 className={styles.aboutUs__header}>Who we are</h3>
          <p>
            7 days a week, there is on-demand pickup and delivery. Easy
            scheduling, saves time and money. Delivery and pick-up are superbly
            executed to generate that Kln Wash client experience. revolutionize
            the laundry industry. With only a few simple steps, you can set
            pickup and drop-off times and arrive at the appointed hour. We enjoy
            assisting you in getting your clothes clean and fresh, therefore we
            are available to you around the clock for any questions, issues, or
            recommendations. Are you looking for a laundry service that will
            pick up and deliver your clean, ready-to-wear clothes? If so,
            arrange for Kln Wash to pick up your first item right away.
          </p>
        </div>
        <div className={styles.aboutUs}>
          <Image
            src="/about/tree.png"
            alt="tree"
            height={215}
            width={212}
            className={styles.tree}
          />
          <h3 className={styles.aboutUs__header}>Environmental impact</h3>
          <p>
            Traditional laundry methods cause a lot of water wastage, energy
            consumption, and CO2 emissions. Many laundry businesses still rely
            on outdated machines and use detergents containing harmful
            chemicals. Kln Wash addresses this issue using energy-efficient
            technology, water recycling systems, eco-friendly cleaning products,
            and sustainable packaging solutions. Our solutions can help you
            significantly reduce the environmental impact of your laundry
            operations, combat climate change and promote sustainable
            practices. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
