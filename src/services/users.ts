import { APIClient } from "./api";

import { GET_FILTERED_USERS, GET_USERS } from "../constants/api";

import { RootObject } from "../types/users";

// @desc       Get Users
// @route      GET /api/users
// @access     Public
export const getUsers = () => APIClient.get<RootObject>(GET_USERS);

export const getFilteredUsers = ({ nationality }: {nationality: string}) => APIClient.get<RootObject>(`${GET_FILTERED_USERS}${nationality}`)