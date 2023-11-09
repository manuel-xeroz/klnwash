import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { navLink } from "@/Data";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <header className={styles.header__container}>
      <div className={styles.header}>
        <Link href="/" className={styles.header__brand}>
          <div className={styles.logo__container}>
            <Image src='/landing/logo.png' alt='logo' fill className={styles.logo}/>
          </div>
          <h3 className={styles.brand__name}>Klnwash</h3>
        </Link>

        <div className={styles.header__links}>
          <ul className={styles.links}>
            {navLink.map(({ link, name }) => (
              <li key={name} >
                <Link href={link} className={styles.link}>{name}</Link>
              </li>
            ))}
          </ul>

          <Button className="btn">get started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
