import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ConversationWindowComp from '../../components/chat/ConversationWindowComp';
import { connect } from 'react-redux';
import { newEvent } from '../../actions/chat';
import socket from '../../socketConfig';

function ConversationWindow({ chat, newEvent,auth }) {
  const [formData, setFormData] = useState({
    text: '',
  });

  const onChange = e => setFormData({ ...formData, text: e.target.value });

  const onSubmit = () => {
    formData.chatRoomId = chat.conversation._id;
    formData.messageId= chat.events.length + 1;
    formData.type= 'new';

    console.log(chat.events.length,"length")
    newEvent(formData);
    const { text, chatRoomId } = formData;
    
    // socket.emit('newEvent', {formData});
    setFormData({ ...formData, text: '' });
  };
  const editEvent=(text,eventPre)=>{
    const event={};
    event.chatRoomId = eventPre.chatRoomId;
    event.messageId= eventPre.messageId
    event.type= 'edit';
    event.text=text;
    newEvent(event);
  }
  const deleteEvent=(eventPre)=>{
    const event={};
    event.chatRoomId = eventPre.chatRoomId;
    event.messageId= eventPre.messageId
    event.type= 'delete';
    event.text="This message was deleted";
    console.log(event,"In sumbit delte event")
    newEvent(event);
  }
  return (
    <ConversationWindowComp
    events={chat.events}
      conversation={chat.conversation}
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
      auth={auth}
      deleteEvent={deleteEvent}
      editEvent={editEvent}
    />
  );
}

ConversationWindow.propTypes = {};

const mapStateToProps = state => ({
  chat: state.chat,
  auth: state.auth,
});
export default connect(mapStateToProps, { newEvent })(ConversationWindow);
