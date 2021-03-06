// import api from '../utils/api';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_CHAT,
} from './types';

// Load User
export const loadUser = () => async dispatch => {
  try {
   
    if(localStorage.token){
      setAuthToken(localStorage.token)
  }
 const res = await axios.get('/api/auth');
   
    console.log('load_user()', res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log('Load_use()', err);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/user', formData, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (body) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  

  try {
    console.log('hi')
    const res = await axios.post('/api/auth', body, config);

    // const res={data:'hi'}
    console.log(res.data)
    await dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    console.log(err);
    
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type:CLEAR_CHAT, type: LOGOUT });
