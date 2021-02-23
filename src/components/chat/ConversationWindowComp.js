import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';

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
    borderRight: '1px solid #e0e0e0',

    backgroundColor: '#0000e0',
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto',
    border: '1px solid #e0e0e0',
  },
  message: {
    marginRight: '40%',
    marginLeft: '5%',
    marginTop: '1%',
    border: '1px solid #e0e0e0',
    background: 'light',
  },
  editButton: { color: 'green' },
  deleteButton: { color: 'red' },
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
    editText: '',
  });

  const handleClickOpenEdit = singleEventProp => {

    console.log(singleEventProp.text)
    setOpenEdit({ ...openEdit, open: true, singleEvent: singleEventProp ,editText: singleEventProp.text});
    

  };
  const onChangeEditText = e => {
    console.log(openEdit.editText)
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
        <Grid item xs={10}>
          <List className={classes.messageArea}>
            {events.map(event => (
              <Grid container className={classes.message}>
                <Grid item xs={9}>
                  <ListItemText>
                    <Typography gutterBottom variant='h7' component='h3'>
                      {event.sender}
                    </Typography>
                    <Typography gutterBottom variant='h8'>
                      {moment(event.date).format('LT')}
                    </Typography>
                  </ListItemText>
                  <Typography gutterBottom variant='h7'>
                    {event.text}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  {event.sender === auth.user._id && (
                    <Fragment>
                      <Button
                        className={classes.editButton}
                        onClick={() => handleClickOpenEdit(event)}
                      >
                        EDIT
                      </Button>

                      <Button
                        className={classes.deleteButton}
                        onClick={() => handleClickOpenDelete(event)}
                      >
                        {' '}
                        DELETE
                      </Button>
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
                <h4>Delete this Message</h4>
                {/* {console.log()} */}
                <Button
                  onClick={() => {
                    deleteEvent(openDelete.singleEvent);
                  }}
                >
                  {' '}
                  Sure?
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
                <Grid container style={{ padding: '10px' }}>
                  <Grid item xs={11}>
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
                        
                        editEvent(openEdit.editText,openEdit.singleEvent);
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
          <Grid container style={{ padding: '10px' }}>
            <Grid item xs={11}>
              <TextField
                id='outlined-basic-email'
                label='Type Something'
                fullWidth
                value={text}
                onChange={onChange}
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
    return <Fragment> No Conversation Selected </Fragment>;
  }
};

ConversationWindowComp.propTypes = {};

export default ConversationWindowComp;
