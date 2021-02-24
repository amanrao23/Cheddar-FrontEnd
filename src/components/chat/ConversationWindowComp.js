import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Cheese from "../layout/Cheese";
import {
  Grid,
  List,
  ListItem,
  Divider,
  ListItemText,
  TextField,
  Fab,
  Button,
  Dialog,
  DialogTitle,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles({
  messageArea: {
    height: "68vh",
    overflowY: "auto",
    border: "1px solid #f7f5f5",
  },
  hoverMessage: {
    padding: 10,
    marginRight: "10%",
    marginTop: "1%",
    background: "light",

    "&:hover": {
      backgroundColor: "#f7f5f5",
    },
  },
  editButton: {
    color: "green",
  },
  deleteButton: {
    color: "red",
  },

  time: {
    position: "relative",
    top: 6,
  },
});

const ConversationWindowComp = ({
  events,
  conversation,
  auth,
  onChange,
  onSubmit,
  formData,
  editEvent,
  deleteEvent,
}) => {
  const classes = useStyles();
  const { text } = formData;
  const [openEdit, setOpenEdit] = React.useState({
    open: false,
    singleEvent: null,
    editText: "",
  });

  const handleClickOpenEdit = (singleEventProp) => {
    console.log(singleEventProp.text);
    setOpenEdit({
      ...openEdit,
      open: true,
      singleEvent: singleEventProp,
      editText: singleEventProp.text,
    });
  };
  const onChangeEditText = (e) => {
    console.log(openEdit.editText);
    setOpenEdit({ ...openEdit, editText: e.target.value });
  };

  const handleCloseEdit = () => {
    setOpenEdit({ ...openEdit, open: false });
  };
  const [openDelete, setOpenDelete] = React.useState({
    open: false,
    singleEvent: null,
  });

  const handleClickOpenDelete = (singleEvent) => {
    setOpenDelete({ ...openDelete, open: true, singleEvent: singleEvent });
  };

  const handleCloseDelete = () => {
    setOpenDelete({ ...openDelete, open: false });
  };
  if (conversation) {
    return (
      <Fragment>
        <Grid item xs={12}>
          <List className={classes.messageArea}>
            {events.map((event) => (
              <Grid container className={classes.hoverMessage}>
                <Grid item xs={9}>
                  <Grid container>
                    <Grid item xs={1}>
                      <ListItemText>
                        <Typography gutterBottom variant="h7" component="h3">
                          {conversation.recipients[0]._id === event.sender
                            ? conversation.recipients[0].username
                            : conversation.recipients[1].username}
                        </Typography>
                      </ListItemText>
                    </Grid>
                    <Grid item xs={2}>
                      <ListItemText
                        align="left"
                        className={classes.time}
                        secondary={moment(event.date).format("LT")}
                      ></ListItemText>
                    </Grid>
                  </Grid>
                  <Typography gutterBottom variant="h7">
                    {event.text}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {event.sender === auth.user._id && (
                    <Fragment>
                      <Grid container>
                        <Grid item xs={1}>
                          <ListItemText>
                            <Button
                              className={classes.editButton}
                              onClick={() => handleClickOpenEdit(event)}
                            >
                              <EditIcon />
                            </Button>
                          </ListItemText>
                        </Grid>
                        <Grid item xs={1}>
                          <ListItemText>
                            {" "}
                          </ListItemText>
                        </Grid>
                        <Grid item xs={1}>
                          <ListItemText>
                            <Button
                              className={classes.deleteButton}
                              onClick={() => handleClickOpenDelete(event)}
                            >
                              <DeleteIcon />
                            </Button>
                          </ListItemText>
                        </Grid>
                      </Grid>
                    </Fragment>
                  )}
                </Grid>
              </Grid>
            ))}
            <Dialog
              onClose={handleCloseDelete}
              aria-labelledby="customized-dialog-title"
              open={openDelete.open}
            >
              <DialogTitle
                id="customized-dialog-title"
                onClose={handleCloseDelete}
              >
                <h4>Delete this Message?</h4>
                {/* {console.log()} */}
                <Button
                  onClick={() => {
                    deleteEvent(openDelete.singleEvent);
                  }}
                >
                  {" "}
                  Confirm
                </Button>
              </DialogTitle>
            </Dialog>
            <Dialog
              onClose={handleCloseEdit}
              aria-labelledby="customized-dialog-title"
              open={openEdit.open}
            >
              <DialogTitle
                id="customized-dialog-title"
                onClose={handleCloseEdit}
              >
                Edit this Message
                <Grid container style={{ padding: "12px" }}>
                  <Grid item xs={10}>
                    <TextField
                      id="outlined-basic-email"
                      fullWidth
                      value={openEdit.editText}
                      onChange={onChangeEditText}
                    ></TextField>
                  </Grid>
                  <Grid xs={1} align="right">
                    <Fab
                      color="primary"
                      aria-label="add"
                      onClick={() => {
                        editEvent(openEdit.editText, openEdit.singleEvent);
                      }}
                    >
                      <SendIcon />
                    </Fab>
                  </Grid>
                </Grid>
              </DialogTitle>
            </Dialog>
            {/* <ListItem key='1'>
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
            </ListItem> */}
            {/* <ListItem key='2'>
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
            </ListItem> */}
            {/* <ListItem key='3'>
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
            </ListItem> */}
          </List>
          <Divider />
          <Grid container style={{ paddingTop: "1%" }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
                value={text}
                onChange={onChange}
              ></TextField>
            </Grid>
            <Grid xs={1} align="right">
              <Fab
                color="primary"
                aria-label="add"
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
    return <Cheese />;
  }
};

ConversationWindowComp.propTypes = {};

export default ConversationWindowComp;
