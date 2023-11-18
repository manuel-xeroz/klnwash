import Image from "next/image";
import styles from "./MarketValue.module.scss";

const MarketValue = (props) => {
  return (
    <div className={styles.section__container}>
      <div className={styles[props.styles]}>
        {props.star && (
          <Image
            src={props.star}
            className={styles.star}
            alt="star"
            height={64}
            width={64}
          />
        )}
        <div className={styles.section__details}>
          <h3>{props.header}</h3>
          <p className={styles.desc}>{props.desc}</p>
          {props.data.map(({ bullet, detail }) => (
            <div key={detail} className={styles.points}>
              <Image src={bullet} alt="point" height={44} width={44} />
              <p>{detail}</p>
            </div>
          ))}

          {props.zigzag && (
            <div className={styles.zigzag}>
              <Image src={props.zigzag} alt="point" fill />
            </div>
          )}
        </div>
        <div className={styles.section__image}>
          <div className={styles[props.styles]}></div>
          <div className={styles.image}>
            <Image src={props.image} alt="phone" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketValue;
