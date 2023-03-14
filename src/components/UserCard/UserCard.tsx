import React from "react";

import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Result } from "../../types/users";

import { EmailIcon, MoreSettings, PhoneIcon } from "../CustomIcons";

import styles from "./userCard.module.scss";

type Props = {
  users: Result[];
};

function UserCard({ users }: Props) {
  const checkBgColor = (usrIndex: number) => {
    if (usrIndex % 2 === 0) return "#B5BCF9";

    return "#BEE3CA";
  };

  const checkTextColor = (usrIndex: number) => {
    if (usrIndex % 2 === 0) return "#3E4144";

    return "#000000";
  };

  return (
    <>
      {users.map((user, userIndex) => (
        <Card
          style={{ background: checkBgColor(userIndex) }}
          key={userIndex}
          className={styles.userCard}
        >
          <MoreSettings
            style={{ color: checkTextColor(userIndex) }}
            className={styles.moreSettings}
          />

          <Box className={styles.userCard__image_box}>
            <Avatar className={styles.avatar} src={user.picture.medium} />
          </Box>

          <CardContent>
            <Typography
              style={{ color: checkTextColor(userIndex) }}
              className={styles.userCard__name}
              gutterBottom
              variant="h5"
            >
              {user.name.first || "Not Provided"}{" "}
              {user.name.last || "Not Provided"}
            </Typography>
            <Box
              style={{ color: checkTextColor(userIndex) }}
              className={styles.userCard__wrapper}
            >
              <EmailIcon />
              <Typography className={styles.userCard__info} variant="h6">
                {user.phone || "Not Provided"}
              </Typography>
            </Box>
            <Box
              style={{ color: checkTextColor(userIndex) }}
              className={styles.userCard__wrapper}
            >
              <PhoneIcon /> {user.email || "Not Provided"}
              <Typography
                className={styles.userCard__info}
                variant="h6"
              ></Typography>
            </Box>

            <Box
              style={{ color: checkTextColor(userIndex) }}
              className={styles.userCard__wrapper}
            >
              <PhoneIcon /> {user.location.country || "Not Provided"}
              <Typography
                className={styles.userCard__info}
                variant="h6"
              ></Typography>
            </Box>
            <Box
              style={{ color: checkTextColor(userIndex) }}
              className={styles.userCard__wrapper}
            >
              <PhoneIcon /> {user.dob.age || "Not Provided"}
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
