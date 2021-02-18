import {
    REGISTER_SUCCESS,
    //REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    //=LOGIN_FAIL,
    LOGOUT,
    
   
    ACCOUNT_DELETED
  } from '../actions/types';
  
  const initialState = {
    conversations:null,
    events: null,
    newEvents:null,
  };
  
  function chatReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload
        };
      
      default:
        return state;
    }
  }
  
  export default chatReducer;
  