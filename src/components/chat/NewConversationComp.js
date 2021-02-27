import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formField: {
    backgroundColor: "white",
    marginLeft:12,
    marginTop:5,
    borderRadius:5
  },
});
const NewConversationComp = ({ formData, onChange, onSubmit }) => {
  const { username } = formData;
  const classes = useStyles();

  return (
    <div>
       <form noValidate onSubmit={onSubmit}>
      <Grid container>
        <Grid item xs={8} >
          <TextField
            className={classes.formField}
            name="username"
            label="Search"
            variant="outlined"
            value={username}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={3} style={{ height: 20, fontSize: 10, marginTop: 11 }}>
          <Button type="submit" value="Register">
            <SearchIcon fontSize="large" style={{ color: "white" }} />
          </Button>
        </Grid>
      </Grid>
      </form>
    </div>
  );
};

NewConversationComp.propTypes = {};

export default NewConversationComp;
