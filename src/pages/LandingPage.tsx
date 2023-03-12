import axios from "axios";
import React, { useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { Result } from "../types/users";

import UserCard from "../components/UserCard";

import styles from "./landing.module.scss";

function MainApp() {
  const [users, setUsers] = useState<Result[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);

  const fetchUsersInfo = async () => {
    try {
      // setLoading(true);
      const response: any = await axios.get(
        "https://randomuser.me/api/?results=10"
      );

      setUsers(response.data.results);
    } catch (err) {
      console.log(err);
    }

    // setLoading(false);
  };

  useEffect(() => {
    fetchUsersInfo();
  }, []);

  return (
    <>
      {/* {loading && (
        <Box
          sx={{ display: "flex", position: "absolute", top: "0", left: "0" }}
        >
          <CircularProgress />
        </Box>
      )} */}
      <div className={styles.landing}>
        <UserCard users={users} />
      </div>
    </>
  );
}

export default MainApp;
