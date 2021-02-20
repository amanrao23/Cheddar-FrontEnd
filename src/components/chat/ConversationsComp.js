import React, { Fragment } from 'react';
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

const ConversationsComp = ({ conversations, auth, onClick }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item xs={2} className={classes.borderRight500}>
        {/* user */}
        <List>
          <ListItem button key='RemySharp'>
            <ListItemIcon>
              <Avatar
                alt='Remy Sharp'
                src='https://material-ui.com/static/images/avatar/1.jpg'
              />
            </ListItemIcon>
            <ListItemText primary='John Wick'></ListItemText>
          </ListItem>
        </List>
        <Divider />
        {/* search bar  */}
        <Grid item xs={12} style={{ padding: '10px' }}>
          <TextField
            id='outlined-basic-email'
            label='Search'
            variant='outlined'
            fullWidth
          />
        </Grid>
        <Divider />
        {/* conversations */}
        {!conversations && (
          <center>
            <span> No Active Conversation </span>
          </center>
        )}

        <List>
          {console.log(conversations, 'j')}
          {conversations.map(conversation => {
            conversation.recipients = conversation.recipients.filter(
              recipient => recipient._id !== auth.user._id
            );
          })}
          {conversations.length > 0 ? (
            conversations.map(conversation => (
              <span onClick={()=>{onClick(conversation)}}>
                <ListItem>
                  <ListItemIcon>
                    <Avatar
                      alt='Remy Sharp'
                      src='https://material-ui.com/static/images/avatar/1.jpg'
                    />
                  </ListItemIcon>
                  <ListItemText primary={conversation.recipients[0].name}>
                    {conversation.recipients[0].name}
                  </ListItemText>
                  <ListItemText secondary='online' align='right'></ListItemText>
                </ListItem>
              </span>
            ))
          ) : (
            <h4>No conversations found...</h4>
          )}
        </List>
      </Grid>
    </Fragment>
  );
};

ConversationsComp.propTypes = {};

export default ConversationsComp;

//  <ListItem button key='Alice'>

/* <ListItemIcon>
<Avatar
  alt='Alice'
  src='https://material-ui.com/static/images/avatar/3.jpg'
/>
</ListItemIcon>
<ListItemText primary='Alice'>Alice</ListItemText>
</ListItem>
<ListItem button key='CindyBaker'>
<ListItemIcon>
<Avatar
  alt='Cindy Baker'
  src='https://material-ui.com/static/images/avatar/2.jpg'
/>
</ListItemIcon>
<ListItemText primary='Cindy Baker'>Cindy Baker</ListItemText>
</ListItem> */
