import Image from "next/image";
import styles from "./MarketValue.module.scss";

const MarketValue = (props) => {
  return (
    <div className={styles.section__container}>
      <div className={styles[props.styles]}>
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
            <Image
              className={styles.zigzag}
              src={props.zigzag}
              alt="point"
              height={19}
              width={221}
            />
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
