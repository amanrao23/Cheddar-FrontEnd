import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  List,
  ListItem,
  Avatar,
  Divider,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import NewConversation from "../../containers/chat/NewConversation";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const useStyles = makeStyles({
  textColor: {
    color: "white",
    fontSize: 25,
    margin: 10,
  },
  dm: {
    color: "white",
    fontSize: 15,
    marginTop: 50,
    marginLeft: 10,
  },
  borderRight500: {
    borderRight: "1px solid white",
    backgroundColor: "#4A154B",
    borderRadius: 10,
  },
  hover: {
    color: "white",
    fontSize: 25,
    margin: 2,

    "&:hover": {
      backgroundColor: "#a765a8",
    },
  },
});

const ConversationsComp = ({ conversations, auth, onClick,notifications }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item xs={2} className={classes.borderRight500}>
        
        <Typography className={classes.textColor}>
          {" "}
          {auth.user.username}
        </Typography>

        <Divider />
        {/* search bar  */}
        <Grid container spacing={2}>
          <NewConversation />
        </Grid>
        <Divider />

        <Typography className={classes.dm}>Direct Messages</Typography>
        {/* conversations */}
        {!conversations && <center></center>}

        <List>
          {conversations.length > 0 ? (
            conversations.map(
              (conversation) =>
                conversation.recipients !== undefined && (
                  <ListItem
                    button
                    className={classes.hover}
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
                    <ListItemText align="right">
                      <FiberManualRecordIcon
                        style={{ fontSize: 20, color: green[500] }}
                      />
                    </ListItemText>
                  </ListItem>
                )
            )
          ) : (
            <h4></h4>
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
