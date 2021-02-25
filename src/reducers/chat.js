import {
  NEW_CONVERSATION,
  GET_CONVERSATIONS,
  SET_CONVERSATION,
  GET_EVENTS,
  NEW_EVENT,
  ADD_CONVERSATION,
  ADD_EVENT,
  CLEAR_CHAT,
  ADD_NOTIFICATION,
  ADD_ONLINE,
  ADD_OFFLINE,
  SET_TYPING,
  CLEAR_TYPING,
  READ_MESSAGE,
} from "../actions/types";

import socket from "../socketConfig";

const initialState = {
  conversations: [],
  conversation: null,
  events: [],
  newEvents: [],
  loading: true,
  notifications: [],
  onlineUser: "offline",
  typing: null,
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
    case SET_CONVERSATION: {
      state.notifications = state.notifications.filter(
        (notification) => notification !== payload._id
      );
      return {
        ...state,
        conversation: payload,
        loading: false,
        onlineUser: "offline",
      };
    }
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
      payload.sort((a, b) =>
        a.messageId > b.messageId ? 1 : b.messageId > a.messageId ? -1 : 0
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
      console.log(payload, "In redcer of delete event");

      if (payload.type !== "new") {
        console.log("Edit/Delete");
        console.log(state.events, "1stt");
        state.events[payload.messageId - 1] = payload;
        console.log(state.events, "2ndd");
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          events: [...state.events, payload],
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
      console.log(payload);
      if (payload.chatRoomId === state.conversation._id) {
        let chatId=payload.chatRoomId
        socket.emit("newReadMessage", { chatId });
        if (payload.type !== "new") {
          console.log("Edit/Delete");
          state.events[payload.messageId - 1] = payload;
          return {
            ...state,
          };
        } else {
          return {
            ...state,
            events: [...state.events, payload],
          };
        }
      } else {
        return {
          ...state,
        };
      }
    }
    case ADD_NOTIFICATION: {
      const notifiedConvo = state.conversations.filter(
        (convo) => convo._id === payload
      );
      state.conversations = state.conversations.filter(
        (convo) => convo._id !== payload
      );
      state.notifications = state.notifications.filter(
        (notification) => notification !== payload
      );
      return {
        ...state,
        notifications: [payload, ...state.notifications],
        conversations: [notifiedConvo[0], ...state.conversations],
      };
    }
    case ADD_ONLINE: {
      return {
        ...state,
        onlineUser: payload,
      };
    }
    case READ_MESSAGE: {
      for (let i = 0; i < state.events.length; i++) {
        state.events[i].status = "read";
      }
      return {
        ...state,
      };
    }
    case SET_TYPING: {
      return {
        ...state,
        typing: payload,
      };
    }
    case CLEAR_TYPING: {
      return {
        ...state,
        typing: null,
      };
    }
    case CLEAR_CHAT: {
      return {
        conversations: [],
        conversation: null,
        events: [],
        newEvents: [],
        loading: true,
      };
    }
    default:
      return state;
  }
}

export default chatReducer;
