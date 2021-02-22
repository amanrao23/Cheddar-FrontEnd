import {
  NEW_CONVERSATION,
  GET_CONVERSATIONS,
  SET_CONVERSATION,
  GET_EVENTS,
  NEW_EVENT,
  ADD_CONVERSATION,
  ADD_EVENT,
} from "../actions/types";

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
        loading: false,
      };
    case SET_CONVERSATION:
      return {
        ...state,
        conversation: payload,
        loading: false,
      };
    case NEW_CONVERSATION: {
      state.conversations = state.conversations.filter(
        (conversation) => conversation._id !== payload._id
      );
      console.log(payload);
      return {
        ...state,
        conversations: [payload, ...state.conversations],
        loading: false,
      };
    }
    case GET_EVENTS: {
      payload.sort((a,b)=>(a.messageId > b.messageId) ? 1 : ((b.messageId > a.messageId) ? -1 : 0))
      return {
        ...state,
        events: payload,
        loading: false,
        // whenever he refreshes this should get called
      };
    }
    case NEW_EVENT: {
      // reducer newEvents -> events
      console.log(payload)
        if(payload.type!=="new"){
          console.log("Edit/Delete");
         state.events[payload.messageId]=payload;
        }
        else{
        return {
          ...state,
          events: [ ...state.events,payload],
        };
      }
    }
    case ADD_CONVERSATION: {
      console.log(payload);
      return {
        ...state,
        conversations: [payload, ...state.conversations],
      };
    }
    case ADD_EVENT: {
      // filter if not type == new
      console.log(payload)
        if(payload.type!=="new"){
          console.log("Edit/Delete");
         state.events[payload.messageId]=payload;
        }
        else{
        return {
          ...state,
          events: [ ...state.events,payload],
        };
      }
    }
    default:
      return state;
  }
}

export default chatReducer;
