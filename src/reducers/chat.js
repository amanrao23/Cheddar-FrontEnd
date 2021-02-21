import {
  NEW_CONVERSATION,
  GET_CONVERSATIONS,
  SET_CONVERSATION,
  GET_EVENTS,
  NEW_EVENT
} from '../actions/types';

const initialState = {
  conversations: [],
  conversation: null,
  events: [],
  newEvents: [],
  loading: true,
};

function chatReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CONVERSATIONS:
      return {
        ...state,
        conversations: payload,
      };
    case SET_CONVERSATION:
      return {
        ...state,
        conversation: payload,
        loading: false,
      };
    case NEW_CONVERSATION: {
      state.conversations = state.conversations.filter(
        conversation => conversation._id !== payload._id
      );
      console.log(payload);
      return {
        ...state,
        conversations: [payload, ...state.conversations],
        loading: false,

      };
    }
    case GET_EVENTS:{
      
      state.newEvents = state.newEvents.filter(
        conversation => conversation._id !== payload._id
      );
      return {
        ...state,
        events: payload,
        loading: false,
        // whenever he refreshes this should get called
     
      };
    }
      case NEW_EVENT: {
        

        // reducer newEvents -> events

        console.log(payload);
        return {
          ...state,
          events: [payload, ...state.events],
          loading: false,
  
        };
      }
    default:
      return state;
  }
}

export default chatReducer;
