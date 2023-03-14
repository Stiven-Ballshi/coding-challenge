import React, { useEffect, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Slider from "@mui/material/Slider";

import { getFilteredUsers } from "../../services/users";

import { Result } from "../../types/users";

import { nationalities } from "../../constants/nationalities";

import UserCard from "../../components/UserCard/UserCard";

import styles from "./UsersPage.module.scss";

function FilteredUsersPage() {
  const [users, setUsers] = useState<Result[]>([]);
  const [selectValue, setSelectValue] = useState<string>("");
  const [age, setAge] = useState<number[]>([0, 100]);

  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsersInfo = async () => {
    setLoading(true);

    try {
      const response = await getFilteredUsers({
        nationality: selectValue,
      });

      setUsers(response.data.results);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setAge(newValue as number[]);
  };

  useEffect(() => {
    fetchUsersInfo();
  }, [selectValue]);

  return (
    <>
      <div className={styles.usersPage}>
        <FormControl className={styles.filter}>
          {/* Nationality Select */}
          <Select
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            value={selectValue}
            label={selectValue}
            onChange={(e) => setSelectValue(e.target.value as string)}
            MenuProps={{
              classes: { paper: styles.filterSelect__paper },
            }}
          >
            {Object.entries(nationalities).map(([code, name], idx) => (
              <MenuItem value={code} key={idx}>
                {name}
              </MenuItem>
            ))}
          </Select>

          {/* Age Slider */}
          <Box className={styles.sliderContainer} width={300}>
            <label className={styles.label}>Age</label>
            <Slider
              value={age}
              onChange={handleChange}
              className={styles.slider}
              valueLabelDisplay="auto"
            />
          </Box>
        </FormControl>

        {/* User Cards */}
        <div className={styles.usersPage__card_container}>
          <UserCard
            users={users
              .filter(
                (user) => user.dob.age >= age[0] && user.dob.age <= age[1]
              )
              .sort((a, b) => a.dob.age - b.dob.age)}
          />
        </div>
      </div>

      {loading && (
        <div className={styles.table__loading}>
          <CircularProgress size={70} color="success" disableShrink />
        </div>
      )}
    </>
  );
}

export default FilteredUsersPage;
