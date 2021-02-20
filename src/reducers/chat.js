import {
  NEW_CONVERSATION,
  GET_CONVERSATIONS,
  SET_CONVERSATION,
  GET_EVENTS,
} from '../actions/types';

const initialState = {
  conversations: [],
  conversation: null,
  events: null,
  newEvents: null,
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
    case GET_EVENTS:
      return {
        ...state,
        events: payload,
        loading: false,

      };
    default:
      return state;
  }
}

export default chatReducer;
