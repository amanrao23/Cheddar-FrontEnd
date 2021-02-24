import React from "react";
import Paper from "@material-ui/core/Paper";
import Conversations from "../../containers/chat/Conversations";
import ConversationWindow from "../../containers/chat/ConversationWindow";
import { makeStyles } from "@material-ui/core/styles";
import ChatNavbar from "../../containers/chat/ChatNavbar";
import { Grid, List, ListItem } from "@material-ui/core";
const useStyles = makeStyles({
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  window: {
    border: "1px solid #cccccc",
    borderRadius: 10,
  },
});
const ChatComp = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        {/* <Grid item xs={12} >
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid> */}
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <Conversations />
        <div className={classes.window}>
          <List>
            <ChatNavbar />
            <ConversationWindow />
          </List>
        </div>
      </Grid>
    </div>
  );
};

ChatComp.propTypes = {};

export default ChatComp;
