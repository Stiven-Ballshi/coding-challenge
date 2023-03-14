import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

function Header() {
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
    <div className={styles.header}>
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
