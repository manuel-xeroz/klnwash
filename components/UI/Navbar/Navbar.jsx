"use client";

import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { navLink } from "@/Data";
import Button from "../Button";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [click, setClick] = useState(false);

  const HandleClick = () => {
    setClick(!click);
  };

  const handleStyle = () => {
    setClick(false);
  };
  
  return (
    <header className={styles.header__container}>
      <div className={styles.header}>
        <Link href="/" className={styles.header__brand}>
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

        <div
          className={`${styles.header__links} ${
            click ? `${styles.active}` : ""
          }`}
        >
          <ul className={styles.links}>
            {navLink.map(({ link, name }) => (
              <li key={name}>
                <Link
                  href={link}
                  className={`${styles.link} ${
                    pathname == link ? `${styles.on}` : ""
                  }`}
                  onClick={handleStyle}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <Button className="phone">get started</Button>
        </div>

        <div className={styles.hamburger} onClick={HandleClick}>
          {click ? (
            <Image
              src="/landing/cancel-nav.png"
              alt="cancel"
              height={40}
              width={40}
              className={styles.cancel}
            />
          ) : (
            <Image
              src="/landing/hamburger.png"
              alt="menu"
              height={32}
              className={styles.menu}
              width={32}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
