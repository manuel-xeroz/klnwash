"use client";
import Image from "next/image";
import styles from "./Accordion.module.scss";
import { useState } from "react";
import { FAQ } from "@/Data";

const Accordion = () => {
  const [faq, setFaq] = useState(FAQ[0].id);
  return (
    <section className={styles.accordion__container}>
      {FAQ.map(({ id, question, answer }) => (
        <div className={styles.accordion} key={id}>
          <div className={styles.question} onClick={() => setFaq(id)}>
            <div className={styles.sign}>
              {faq === id ? (
                <Image src="/faq/minus-circle.png" alt="plus" fill />
              ) : (
                <Image src="/faq/plus-circle.png" alt="plus" fill />
              )}
            </div>

            <h3>{question}</h3>
          </div>
          {faq === id ? <p>{answer}</p> : " "}
        </div>
      ))}
    </section>
  );
};

export default Accordion;
