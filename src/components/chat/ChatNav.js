import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  grow: {
    width: 800,
    height: 70,
    background: '#4A154B',
    color: 'white',
    marginTop: -10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    color: 'white',
    fontSize: 25,
    padding: 5,
  },
}));
export default function UserNav({ conversation, auth, online, typing }) {
  const classes = useStyles();

  if (conversation !== null)
    return (
      <div className={classes.grow}>
        {conversation.recipients[0].username === auth.user.username
          ? conversation.recipients[1].username
          : conversation.recipients[0].name}
        {/* {typing===conversation._id&&<p>r</p>}
      {} */}
      {conversation._id === typing && <Typography>typing...</Typography>}
        <Typography>
        
          {online} 
        </Typography>
      </div>
    );
  else return <div className={classes.grow}>Cheddar</div>;
}
