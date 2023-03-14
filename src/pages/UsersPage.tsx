import React, { useEffect, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { Result } from "../types/users";

import UserCard from "../components/UserCard/UserCard";
import { DropdownIcon } from "../components/CustomIcons";

import styles from "./UsersPage.module.scss";
import { getFilteredUsers } from "../services/users";
import { nationalities } from "../constants/nationalities";

function FilteredUsersPage() {
  const [users, setUsers] = useState<Result[]>([]);
  const [selectValue, setSelectValue] = useState<string>("");
  const [age, setAge] = useState<number[]>([0, 100]);

  const fetchUsersInfo = async () => {
    try {
      const response = await getFilteredUsers({
        nationality: selectValue,
      });

      setUsers(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setAge(newValue as number[]);
  };

  useEffect(() => {
    fetchUsersInfo();
  }, [selectValue]);

  return (
    <div className={styles.usersPage}>
      <FormControl className={styles.filter}>
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

        <Box className={styles.slider} width={300}>
          <label className={styles.label}>Age</label>
          <Slider
            value={age}
            onChange={handleChange}
            style={{ color: "white" }}
            valueLabelDisplay="auto"
          />
        </Box>
      </FormControl>

      <div className={styles.usersPage__card_container}>
        <UserCard
          users={users
            .filter((user) => user.dob.age >= age[0] && user.dob.age <= age[1])
            .sort((a, b) => a.dob.age - b.dob.age)}
        />
      </div>
    </div>
  );
}

export default FilteredUsersPage;
