import Image from "next/image";
import Button from "../Button";
import styles from "./Awesome.module.scss";

const Awesome = (props) => {
  return (
    <div className={styles.awesome}>
      <div className={styles.backdrop} onClick={props.onClick} />
      <div className={styles.awesome__container}>
        <h3>Awesome</h3>
        <p>
          We’ll send a mail to <span>example@email.com</span> when we are ready
        </p>
        <Button className="awesome">Done</Button>
        <Image
          src="/T&C/cancel.png"
          alt="cancel"
          height={24}
          width={24}
          className={styles.cancel}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};

export default Awesome;
