import React, { useEffect } from "react";
import ChatComp from "../../components/chat/ChatComp";
import {
  getConversations,
  addConversation,
  addEvent,
  addNotification,
} from "../../actions/chat";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import socket from "../../socketConfig";

const Chat = ({ getConversations, addConversation, auth, chat, addEvent,addNotification }) => {
  const username = auth.user.username;
  const conversations = chat.conversations;
  useEffect(() => {
    getConversations();
  }, []);
  useEffect(() => {
    if (auth.user.username !== undefined && conversations.length > 0) {
      socket.emit("join", { username, conversations }, (error) => {
        if (error) {
          alert(error);
        }
      });
    }
  }, [auth, chat.conversations]);

  useEffect(() => {
    socket.on("newEvent", ({ event }) => {
      console.log(event, "socket newMessage");
      console.log(event._id, "eventid");
      console.log(chat, "hey man comonnnnn");
      if (chat.conversation && chat.conversation._id === event.chatRoomId) {
        addEvent(event);
        
      } else {
        addNotification(event.chatRoomId)
        //send notification of new event
      }
    });
  }, [chat.conversation]);
  useEffect(() => {
    socket.on("newConversation", ({ newConvo }) => {
      console.log(newConvo, "new conversation");
      addConversation(newConvo);
    });
  }, []);
  return <ChatComp />;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  chat: state.chat,
});

export default connect(mapStateToProps, {
  getConversations,
  addConversation,
  addEvent,
  addNotification
})(Chat);
