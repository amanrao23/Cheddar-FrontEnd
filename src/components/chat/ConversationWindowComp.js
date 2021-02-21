import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  List,
  ListItem,
  Divider,
  ListItemText,
  TextField,
  Fab,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

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

    backgroundColor: '#0000e0',
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto',
  },
});

const ConversationWindowComp = ({
  conversation,
  onChange,
  onSubmit,
  formData,
}) => {
  const classes = useStyles();
  const { text } = formData;
  if (conversation) {
    return (
      <Fragment>
        <Grid item xs={8}>
          <List className={classes.messageArea}>
            <ListItem key='1'>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align='right'
                    primary="Hey man, What's up ?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align='right' secondary='09:30'></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key='2'>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align='left'
                    primary='Hey, Iam Good! What about you ?'
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align='left' secondary='09:31'></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key='3'>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align='right'
                    primary="Cool. i am good, let's catch up!"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align='right' secondary='10:30'></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: '20px' }}>
            <Grid item xs={11}>
              <TextField
                id='outlined-basic-email'
                label='Type Something'
                fullWidth
                value={text}
                onChange={onChange}
              ></TextField>
            </Grid>
            <Grid xs={1} align='right'>
              <Fab
                color='primary'
                aria-label='add'
                onClick={() => {
                  onSubmit();
                }}
              >
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  } else {
    return <Fragment> No Conversation Selected </Fragment>;
  }
};

ConversationWindowComp.propTypes = {};

export default ConversationWindowComp;
