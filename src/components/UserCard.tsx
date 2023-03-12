import React from "react";

import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Result } from "../types/users";

import { EmailIcon, MoreSettings, PhoneIcon } from "./CustomIcons";

import styles from "./userCard.module.scss";

type Props = {
  users: Result[];
};

function UserCard({ users }: Props) {
  return (
    <>
      {users.map((user, userIndex) => (
        <Card key={userIndex} className={styles.userCard}>
          <MoreSettings className={styles.moreSettings} />

          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <CardContent>
            <Typography
              className={styles.userCard__name}
              gutterBottom
              variant="h5"
            >
              {user.name.first} {user.name.last}
            </Typography>
            <Box className={styles.userCard__wrapper}>
              <PhoneIcon />
              <Typography className={styles.userCard__info} variant="h6">
                {user.phone}
              </Typography>
            </Box>
            <Box className={styles.userCard__wrapper}>
              <EmailIcon /> {user.email}
              <Typography
                className={styles.userCard__info}
                variant="h6"
              ></Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default UserCard;
