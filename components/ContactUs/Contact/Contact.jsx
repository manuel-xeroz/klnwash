"use client";

import Image from "next/image";
import styles from "./Contact.module.scss";
import FormModal from "@/components/UI/FormModal/FormModal";
import { useState } from "react";
import Awesome from "@/components/UI/AwesomeModal/Awesome";

const Contact = () => {
  const [formModal, setFormModal] = useState(false);
  const [awesomeModal, setAwesomeModal] = useState(false);

  const handleAwesomeModal = () => {
    setAwesomeModal(true)
    console.log('heyy')
  }

  return (
    <section className={styles.container}>
      <div className={styles.contact}>
        {formModal && <FormModal awesome={handleAwesomeModal} onClick={() => setFormModal(false)} />}
        {awesomeModal && <Awesome onClick={() => setAwesomeModal(false)} />}
        <div className={styles.contact__links}>
          <div className={styles.contact__link} onClick={() => setFormModal(true)}>
            <Image
              src="/contact/message.png"
              alt="mail icon"
              height={119}
              width={119}
            />
            <p>support@klnwash.com</p>
          </div>
          <div className={styles.contact__link}>
            <Image
              src="/contact/call.png"
              alt="mail icon"
              height={119}
              width={119}
            />
            <p>+234-8147037766</p>
          </div>
        </div>
        <div className={styles.contact__image}>
          <Image src="/contact/phone.png" alt="phone" fill />
        </div>
      </div>
    </section>
  );
};

export default Contact;
