import { NEW_CONVERSATION, GET_CONVERSATIONS } from '../actions/types';

const initialState = {
  conversations: [],
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
