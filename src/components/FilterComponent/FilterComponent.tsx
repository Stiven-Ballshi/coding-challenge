import React, { useState } from 'react'

import { Result } from '../../types/users';

import styles from './filter.module.scss'

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<Result[]>>;
  users: Result[];
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
}

function FilterComponent({users, setUsers, selectValue, setSelectValue}: Props) {

  return <div>Hello</div>
}

export default FilterComponent