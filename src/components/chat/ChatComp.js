import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Conversations from '../../containers/chat/Conversations';
import NewConversation from '../../containers/chat/NewConversation';

import ConversationWindow from '../../containers/chat/ConversationWindow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: '100%',
      height: '80vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0',
  
        backgroundColor: '#0000e0'
    },
    messageArea: {
      height: '70vh',
      overflowY: 'auto'
    }
  });
const ChatComp = props => {
    const classes = useStyles();
    return (
        <div>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
        <NewConversation></NewConversation>
            <Conversations></Conversations>
            <ConversationWindow></ConversationWindow>
            
        </Grid>
      </div>
    )
}

ChatComp.propTypes = {

}

export default ChatComp
