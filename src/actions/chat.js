// import api from '../utils/api';
import axios from 'axios';

import { setAlert } from './alert';
import {
  GET_CONVERSATIONS,
  GET_CONVERSATIONS_ERROR,
  NEW_CONVERSATION,
  NEW_CONVERSATION_ERROR,
  SET_CONVERSATION,
  SET_CONVERSATION_ERROR,
  GET_EVENTS,
  GET_EVENTS_ERROR,
  NEW_EVENT,
  NEW_EVENT_ERROR,
  ADD_CONVERSATION,
  ADD_CONVERSATION_ERROR,
  ADD_EVENT_ERROR,
  ADD_EVENT,
  ADD_NOTIFICATION,
  ADD_NOTIFICATION_ERROR,
  ADD_ONLINE,
  ADD_OFFLINE,
  ADD_STATUS_ERROR,
  CLEAR_TYPING,
  CLEAR_TYPING_ERROR,
  SET_TYPING,
  SET_TYPING_ERROR
} from './types';

// Load User
export const getConversations = () => async dispatch => {
  try {
    const res = await axios.get('/api/user/conversations');
    console.log('load_user()', res.data);
    dispatch({
      type: GET_CONVERSATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log('Load_use()', err);
    dispatch({
      type: GET_CONVERSATIONS_ERROR,
    });
  }
};

export const newConversation = body => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/user/newConversation', body, config);

    console.log('load_user()', res.data);
    dispatch({
      type: NEW_CONVERSATION,
      payload: res.data,
    });
  } catch (err) {
    console.log('Load_use()', err);
    dispatch({
      type: NEW_CONVERSATION_ERROR,
    });
  }
};

export const setConversation = conversation => async dispatch => {
  try {
    dispatch({
      type: SET_CONVERSATION,
      payload: conversation,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SET_CONVERSATION_ERROR,
    });
  }
};

export const getEvents = (chatId, username) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const timestamp = null;
  const body = { chatRoomId: chatId, timestamp: timestamp, username: username };
  console.log(body);

  try {
    const res = await axios.post('/api/event/getEvents', body, config);
    console.log(res.data);
    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_EVENTS_ERROR,
    });
  }
};

export const newEvent = body => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  console.log(body, 'In newEvent jiiiiiiiiiiii');
  try {
    const res = await axios.post('/api/event/newEvent', body, config);
    //socket event

    dispatch({
      type: NEW_EVENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: NEW_EVENT_ERROR,
    });
  }
};

export const addConversation = body => async dispatch => {
  console.log('In add Conversation ');
  try {
    dispatch({
      type: ADD_CONVERSATION,
      payload: body,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_CONVERSATION_ERROR,
    });
  }
};
export const addEvent = body => async dispatch => {
  try {
    dispatch({
      type: ADD_EVENT,
      payload: body,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_EVENT_ERROR,
    });
  }
};

export const addNotification = body => async dispatch => {
  try {
    dispatch({
      type: ADD_NOTIFICATION,
      payload: body,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_NOTIFICATION_ERROR,
    });
  }
};

export const addOnline = body => async dispatch => {
  try {
    dispatch({
      type: ADD_ONLINE,
      payload: body,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_STATUS_ERROR,
    });
  }
};

export const addOffline = body => async dispatch => {
  try {
    dispatch({
      type: ADD_OFFLINE,
      payload: body,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_STATUS_ERROR,
    });
  }
};

export const setTyping = chatRoomId => async dispatch => {
  try {
    dispatch({
      type: SET_TYPING,
      payload: chatRoomId,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SET_TYPING_ERROR,
    });
  }
};
export const clearTyping = chatRoomId => async dispatch => {
  try {
    dispatch({
      type: CLEAR_TYPING,
      payload: chatRoomId,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: CLEAR_TYPING_ERROR,
    });
  }
};
