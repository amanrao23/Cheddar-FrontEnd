import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({});
const NewConversationComp = ({ formData, onChange, onSubmit }) => {
  const { username } = formData;
  const classes = useStyles();

  return (
    <div>
      <form noValidate onSubmit={onSubmit}>
        <Grid item xs={12} style={{ padding: "10px",color:"white" }}>
          <TextField
            name="username"
            id="outlined-basic-email"
            label="Search"
            variant="outlined"
            fullWidth
            value={username}
            onChange={onChange}
            color="white"
          />
        </Grid>
        <Grid item xs={12} style={{ padding: "10px" }}>
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              value="Register"
            ><SearchIcon/></Button>
          
        </Grid>
      </form>
    </div>
  );
};

NewConversationComp.propTypes = {};

export default NewConversationComp;
