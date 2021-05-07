import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import '../../App.css';
import { setSearch } from '../../bll/Reducer';

export const SearchForm = React.memo(() => {
  const [searchName, setSearchName] = useState('');
  const dispatch = useDispatch();

  const searchItemName = () => {
    dispatch(setSearch(searchName));
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchItemName();
    }
  };

  return (
    <div>
      <div>
        <TextField type='search' variant='outlined' value={searchName} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} placeholder='Search track' style={{ backgroundColor: 'gray', margin: '20px' }} />
        <Button style={{ backgroundColor: 'red', margin: '20px', height: '55px', color: 'white' }} type='submit' onClick={searchItemName}>
          SEARCH
        </Button>
      </div>
    </div>
  );
});
