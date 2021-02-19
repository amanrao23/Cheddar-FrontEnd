// import api from '../utils/api';
import axios from 'axios';

import { setAlert } from './alert';
import {
    GET_CONVERSATIONS,
    GET_CONVERSATIONS_ERROR,
    NEW_CONVERSATION,
    NEW_CONVERSATION_ERROR
} from './types';

// Load User
export const getConversations = () => async dispatch => {
  

   try{
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

export const newConversation = (body) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
    try{
      const res = await axios.post('/api/user/newConversation',body,config);
      
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
 