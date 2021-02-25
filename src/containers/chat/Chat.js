import React, { useEffect } from 'react';
import ChatComp from '../../components/chat/ChatComp';
import {
  getConversations,
  addConversation,
  addEvent,
  addNotification,
  addOnline,
  setTyping,
  clearTyping,
} from '../../actions/chat';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import socket from '../../socketConfig';

const Chat = ({
  getConversations,
  addConversation,
  auth,
  chat,
  addEvent,
  addNotification,
  addOnline,
  setTyping,
  clearTyping,
}) => {
  const username = auth.user.username;
  const conversations = chat.conversations;
  useEffect(() => {
    if (auth.user.username !== undefined) {
      getConversations();
    }
  }, [auth]);

  useEffect(() => {
    if (auth.user.username !== undefined && conversations.length > 0) {
      socket.emit('join', { username, conversations }, error => {
        if (error) {
          alert(error);
        }
      });
    }
  }, [auth, chat.conversations]);

  useEffect(() => {
    console.log('Hi', chat.conversation);
    socket.on('newEvent', ({ event }) => {
      // console.log(event, "socket newMessage");
      // console.log(event._id, "eventid");
      // console.log(chat, "hey man comonnnnn");
      chat.conversation && chat.conversation._id === event.chatRoomId
        ? addEvent(event)
        : addNotification(event.chatRoomId);
      //send notification of new event
    });
  }, [chat.conversation]);
  useEffect(() => {
    socket.on('newConversation', ({ newConvo }) => {
      console.log(newConvo, 'new conversation');
      addConversation(newConvo);
    });
  }, []);
  useEffect(() => {
    socket.on('online', ({ userStatus }) => {
      console.log(userStatus, 'new online id');
      addOnline(userStatus);
    });
  }, []);
  useEffect(() => {
    socket.on('showTyping', ({ chatRoomId }) => {
      // I will call it and set Timeout and call someting to clear typing

      console.log('typing');
      setTyping(chatRoomId);
      setTimeout(() => {
        clearTyping();
      }, 3000);
    });
  }, []);
  return <ChatComp />;
};

const mapStateToProps = state => ({
  auth: state.auth,
  chat: state.chat,
});

export default connect(mapStateToProps, {
  getConversations,
  addConversation,
  addEvent,
  addNotification,
  addOnline,
  setTyping,
  clearTyping,
})(Chat);
