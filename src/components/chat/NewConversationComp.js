import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
    Grid,
    List,
    ListItem,
    Avatar,
    Divider,
    ListItemText,
    TextField,
    ListItemIcon,
  } from '@material-ui/core';
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: '100%',
      height: '80vh',
    },
    headBG: {
      backgroundColor: '#e0e0e0',
    },
    borderRight500: {
      borderRight: '1px solid #e0e0e0',
  
      backgroundColor: 'lightGrey',
    },
    messageArea: {
      height: '70vh',
      overflowY: 'auto',
    },
  });
const NewConversationComp = ({ formData, onChange, onSubmit }) => {
  const { username } = formData;
  const classes = useStyles();

  return (
    <div>
        <Grid item xs={1} className={classes.borderRight500}>
      <h3>Converastions</h3>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='username'
            placeholder='Username'
            name='username'
            value={username}
            onChange={onChange}
          />
        </div>

        <input type='submit' className='btn btn-primary' value='login' />
      </form>
      </Grid>
    </div>
  );
};

NewConversationComp.propTypes = {};

export default NewConversationComp;
