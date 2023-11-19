"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";
import { footerLink1, footerLink2 } from "@/Data";
import Button from "../Button";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer}>
        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>
            <Link href="/" className={styles.brand__top}>
              <div className={styles.logo__container}>
                <Image
                  src="/landing/logo.png"
                  alt="logo"
                  fill
                  className={styles.logo}
                />
              </div>
              <h3 className={styles.brand__name}>Klnwash</h3>
            </Link>

            <div className={styles.brand__bottom}>
              <div className={styles.apple}>
                <Image
                  src="/landing/apple.png"
                  alt="apple store"
                  fill
                  className={styles.os_image}
                />
              </div>

              <div className={styles.playstore}>
                <Image
                  src="/landing/playstore.png"
                  alt="play store"
                  fill
                  className={styles.os_image}
                />
              </div>
            </div>
          </div>

          <div className={styles.links}>
            <ul className={styles.link__items}>
              {footerLink1.map(({ name, link }) => (
                <li key={name}>
                  <Link
                    href={link}
                    className={`${styles.link} ${
                      pathname == link ? `${styles.on}` : ""
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className={`${styles.link__items} ${styles.link__items_left} `}>
              {footerLink2.map(({ name, link }) => (
                <li key={name}>
                  <Link
                    href={link}
                    className={`${styles.link} ${
                      pathname == link ? `${styles.on}` : ""
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footer__ad}>
            <h3>Join the Klnwash Waitlist</h3>
            <p>
              Get early access to amazing features coming to Klnwash. Enter your
              email to join.
            </p>

            <form className={styles.footer__form}>
              <input type="email" placeholder="Enter your email address" />
              <Button className="btn">join waitlist</Button>
            </form>
          </div>
        </div>

        <hr className={styles.line} />

        <div className={styles.footer__bottom}>
          <p>All rights reserved</p>
          <div className={styles.socials}>
            <Image
              src="/landing/facebook.png"
              alt="facebook"
              height={32}
              width={32}
            />
            <Image
              src="/landing/twitter.png"
              alt="twitter"
              height={32}
              width={32}
            />
            <Image
              src="/landing/instagram.png"
              alt="instagram"
              height={32}
              width={32}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
