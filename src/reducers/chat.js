import { NEW_CONVERSATION, GET_CONVERSATIONS,SET_CONVERSATION } from '../actions/types';

const initialState = {
  conversations: [],
  conversation: null,
  events: null,
  newEvents: null,
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
      };
    case NEW_CONVERSATION: {  
      state.conversations=state.conversations.filter((conversation) => conversation._id !== payload._id)
      console.log(payload)
        return {
          ...state,
          conversations: [payload, ...state.conversations],
        };
      
    }
    default:
      return state;
  }
}

export default chatReducer;
