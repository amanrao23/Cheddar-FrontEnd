import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ConversationWindowComp from '../../components/chat/ConversationWindowComp';
import { connect } from 'react-redux';
import { newEvent } from '../../actions/chat';
import socket from '../../socketConfig';

function ConversationWindow({ chat, newEvent }) {
  const [formData, setFormData] = useState({
    text: '',
    type: 'new',
  });

  const onChange = e => setFormData({ ...formData, text: e.target.value });

  const onSubmit = () => {
    formData.chatRoomId = chat.conversation._id;
    formData.messageId= chat.events.length + 1;

    console.log(chat.events.length,"length")
    newEvent(formData);
    const { text, chatRoomId } = formData;
    // socket.emit('newEvent', formData);
    setFormData({ ...formData, text: '' });
  };

  return (
    <ConversationWindowComp
      conversation={chat.conversation}
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

ConversationWindow.propTypes = {};

const mapStateToProps = state => ({
  chat: state.chat,
  auth: state.auth,
});
export default connect(mapStateToProps, { newEvent })(ConversationWindow);
