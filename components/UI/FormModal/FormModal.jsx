'use client'

import Image from "next/image";
import Button from "../Button";
import styles from "./FormModal.module.scss";

const FormModal = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    props.awesome()
  }

  return (
    <div className={styles.form__modal}>
      <div className={styles.backdrop} onClick={props.onClick}/>
      <div className={styles.modal__container}>
        <h3>Join Waitlist</h3>
        <p>
          Get early access to amazing features coming to Klnwash. Enter your
          email to join.
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.form__name}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className={styles.form__mail}>
            <label htmlFor="email">Mail</label>
            <div className={styles.form__mail__input}>
              <div className={styles.envelop}>
                <Image src="/T&C/mail.png" alt="mail" height={20} width={20} />
              </div>

              <input type="email" id="email" placeholder="Enter your email" />
            </div>
          </div>

          <Button className="form">Submit</Button>
        </form>

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

export default FormModal;
