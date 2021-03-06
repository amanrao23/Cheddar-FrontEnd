import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Cheese from '../layout/Cheese';
import CheckIcon from '@material-ui/icons/Check';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import BlockIcon from '@material-ui/icons/Block';
import './hover.css';
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
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  messageArea: {
    height: '69vh',
    overflowY: 'auto',
    border: '1px solid #f7f5f5',
  },
  hoverMessage: {
    padding: 10,
    marginRight: '10%',
    marginTop: '1%',
    background: 'light',

    '&:hover': {
      backgroundColor: '#f7f5f5',
    },
  },
  editButton: {
    // fontSize: 5,
    color: 'green',
  },
  deleteButton: {
    // fontSize: 5,
    color: 'red',
  },

  time: {
    position: 'relative',
    top: 6,
  },
  doubleIcon: {
    color: '#005a9e',
  },
  singleCheckIcon: {
    color: '#005a9e',
  },
  deleteText: {
    fontStyle: 'italic',
  },
  editText: {
    fontSize: 12,
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
  showTyping,
}) => {
  const classes = useStyles();
  const { text } = formData;
  const [openEdit, setOpenEdit] = React.useState({
    open: false,
    singleEvent: null,
    editText: '',
  });

  const handleClickOpenEdit = singleEventProp => {
    console.log(singleEventProp.text);
    setOpenEdit({
      ...openEdit,
      open: true,
      singleEvent: singleEventProp,
      editText: singleEventProp.text,
    });
  };
  const onChangeEditText = e => {
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

  const handleClickOpenDelete = singleEvent => {
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
            {events.map(event => (
              <Grid container className='message_area'>
                <Grid item xs={9}>
                  <Grid container>
                    <Grid item xs={1}>
                      <ListItemText>
                        <Typography gutterBottom variant='h7' component='h3'>
                          {conversation.recipients[0]._id === event.sender
                            ? conversation.recipients[0].username
                            : conversation.recipients[1].username}
                        </Typography>
                      </ListItemText>
                    </Grid>
                    <Grid item xs={2}>
                      <ListItemText
                        align='left'
                        className={classes.time}
                        secondary={moment(event.date).format('LT')}
                      ></ListItemText>
                    </Grid>
                    {event.sender === auth.user._id &&
                      event.type !== 'delete' && (
                        <Fragment>
                          {event.status == 'read' ? (
                            <DoneAllIcon className={classes.doubleIcon} />
                          ) : (
                            <CheckIcon className={classes.singleCheckIcon} />
                          )}
                        </Fragment>
                      )}
                  </Grid>

                  {event.type === 'delete' ? (
                    <Typography
                      gutterBottom
                      variant='h7'
                      className={classes.deleteText}
                    >
                      <BlockIcon gutterBottom color="secondary"fontSize="small" />{event.text}
                    </Typography>
                  ) : event.type === 'new' ? (
                    <Typography gutterBottom variant='h7' className=''>
                      {event.text}
                    </Typography>
                  ) : (
                    event.type === 'edit' && (
                      <Typography gutterBottom variant='h7' className=''>
                        {event.text}{' '}
                        <Typography className={classes.editText}>
                          {' '}
                          (edited)
                        </Typography>
                      </Typography>
                    )
                  )}
                </Grid>
                <Grid item xs={2}>
                  {event.sender === auth.user._id && event.type !== 'delete' && (
                    <Fragment>
                      <Grid container>
                        <Grid item xs={5}>
                          <ListItemText>
                            <Button
                              className='action'
                              onClick={() => handleClickOpenEdit(event)}
                            >
                              <EditIcon></EditIcon>
                            </Button>
                          </ListItemText>
                        </Grid>

                        <br />
                        <Grid item align='right' xs={6}>
                          <ListItemText>
                            <Button
                              className='action'
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
              aria-labelledby='customized-dialog-title'
              open={openDelete.open}
            >
              <DialogTitle
                id='customized-dialog-title'
                onClose={handleCloseDelete}
              >
                <h4>Delete this Message?</h4>
                {/* {console.log()} */}
                <Button
                  onClick={() => {
                    deleteEvent(openDelete.singleEvent);
                    handleCloseDelete()
                  }}
                >
                  {' '}
                  Confirm
                </Button>
              </DialogTitle>
            </Dialog>
            <Dialog
              onClose={handleCloseEdit}
              aria-labelledby='customized-dialog-title'
              open={openEdit.open}
            >
              <DialogTitle
                id='customized-dialog-title'
                onClose={handleCloseEdit}
              >
                Edit this Message
                <Grid container style={{ padding: '12px' }}>
                  <Grid item xs={10}>
                    <TextField
                      id='outlined-basic-email'
                      fullWidth
                      value={openEdit.editText}
                      onChange={onChangeEditText}
                    ></TextField>
                  </Grid>
                  <Grid xs={1} align='right'>
                    <Fab
                      color='primary'
                      aria-label='add'
                      onClick={() => {
                        editEvent(openEdit.editText, openEdit.singleEvent);
                        handleCloseEdit();
                      }}
                    >
                      <SendIcon />
                    </Fab>
                  </Grid>
                </Grid>
              </DialogTitle>
            </Dialog>
          </List>
          <Divider />
          <Grid container>
            <Grid item xs={11}>
              <TextField
                id='outlined-basic-email'
                label='Type Something'
                fullWidth
                value={text}
                onChange={onChange}
                onKeyPress={showTyping}
              ></TextField>
            </Grid>
            <Grid xs={1} align='right'>
              <Fab
                color='primary'
                aria-label='add'
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
