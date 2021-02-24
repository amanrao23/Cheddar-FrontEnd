import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import Typography from '@material-ui/core/Typography';
import {
  Grid,
  List,
  ListItem,
  Avatar,
  Divider,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import NewConversation from '../../containers/chat/NewConversation';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const useStyles = makeStyles({
  textColor: {
    color: 'white',
    fontSize: 25,
    margin: 10,
  },
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
    borderRight: '1px solid white',
    backgroundColor: '#4A154B',
    borderRadius: 10,
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

        {/* <ListItemIcon>
              <Avatar
                alt='Remy Sharp'
                src='https://material-ui.com/static/images/avatar/1.jpg'
              />
            </ListItemIcon> */}
        <Typography className={classes.textColor}>
          {' '}
          {auth.user.username}
        </Typography>

        <Divider />
        {/* search bar  */}
        <Grid container spacing={2}>
          <NewConversation />
        </Grid>
        <Divider />

        {/* conversations */}
        {!conversations && <center></center>}

        <List>
          {console.log(conversations, 'j')}
          {/* {conversations.map(conversation => {
            conversation.recipients = conversation.recipients.filter(
              recipient => recipient._id !== auth.user._id
            );
          })} */}
          {conversations.length > 0 ? (
            conversations.map(
              conversation =>
                conversation.recipients !== undefined && (
                  <ListItem
                    button
                    className={classes.textColor}
                    onClick={() => {
                      onClick(conversation);
                    }}
                  >
                    <ListItemText>
                      {conversation.recipients[0].username ===
                      auth.user.username
                        ? conversation.recipients[1].username
                        : conversation.recipients[0].name}
                    </ListItemText>
                    <ListItemText align='right'>
                      <FiberManualRecordIcon
                        style={{ fontSize: 20, color: green[500] }}
                      />
                    </ListItemText>
                  </ListItem>
                )
            )
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
