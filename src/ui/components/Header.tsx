import React from 'react';
import '../../App.css';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <AppBar position='static' style={{ backgroundColor: 'black' }}>
        <Toolbar className={'toolBur'}>
          <div className={'toolBur__iconBlock'}>
            <Typography variant='h6' style={{ marginTop: '8px' }}>
              <Link className='header__link' style={{ marginRight: '20px' }} to='/home'>
                HOME
              </Link>
            </Typography>
          </div>
          <div className={'toolBur__iconBlock'}>
            <Typography variant='h6' style={{ marginTop: '8px' }}>
              <Link className='header__link' to='/search'>
                SEARCH TRACK
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
