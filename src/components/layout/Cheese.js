import React, { Fragment } from "react";
import cheese1 from "../../img/cheese1.gif";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: 20,
    padding: 5,

    marginLeft: "20%",
  },
  style:{
    marginTop: 200,
    width: "200px",
    display: "block",

    margin: "auto",
  }
}));
const Cheese = () => {
  const classes = useStyles();
  return(
  <Fragment>
    <img
      src={cheese1}
      className={classes.style}
      alt="Loading..."
    />
    <Typography className={classes.text}>Click on a conversation or add a new conversation.</Typography>
  </Fragment>
)};

export default Cheese;
