import React, { useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";

import { getUsers } from "../../services/users";

import { Result } from "../../types/users";

import UserCard from "../../components/UserCard/UserCard";

import styles from "./Landing.module.scss";

function MainApp() {
  const [users, setUsers] = useState<Result[]>([]);

  const fetchUsersInfo = async () => {
    let usersNum = 0;

    const interval = setInterval(async () => {
      if (usersNum < 10) {
        try {
          const response = await getUsers();

          setUsers((prevState) => [...prevState, ...response.data.results]);
        } catch (err) {
          console.log(err);
        }
        usersNum++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  useEffect(() => {
    fetchUsersInfo();
  }, []);

  return (
    <>
      <div className={styles.landing}>
        <div className={styles.landing__container}>
          <UserCard users={users} />
        </div>
      </div>
    </>
  );
}

export default MainApp;
