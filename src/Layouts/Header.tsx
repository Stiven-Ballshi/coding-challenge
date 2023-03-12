import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.scss";

function Header() {
  const navRef = useRef<HTMLDivElement>(null);

  const handleUserScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 80) {
      navRef?.current?.classList.add("sticky");
    } else {
      navRef.current?.classList.remove("sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleUserScroll);

    return () => {
      window.removeEventListener("scroll", handleUserScroll);
    };
  }, []);

  const headerNavigation = [
    {
      redirect: "/",
      title: "Homepage",
      key: 0,
    },
    {
      redirect: "/users",
      title: "Users",
      key: 1,
    },
  ];

  return (
    <div ref={navRef} className={styles.header}>
      <div className={styles.header__container}>
        {headerNavigation.map((link, linkIndex) => {
          return (
            <Link
              key={link.key}
              className={styles.header__link}
              to={link.redirect}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
