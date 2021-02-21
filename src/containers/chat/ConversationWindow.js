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
    messageId: chat.events.length + 1,
  });

  const onChange = e => setFormData({ ...formData, text: e.target.value });

  const onSubmit = () => {
    console.log(formData);
    formData.chatRoomId = chat.conversation._id;
    newEvent(formData);
    const { text,chatRoomId } = formData;
    socket.emit('newEvent', {text,chatRoomId});
    console.log('hi');
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
