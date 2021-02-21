import React from 'react';
import PropTypes from 'prop-types';
import ConversationsComp from '../../components/chat/ConversationsComp';
import { connect } from 'react-redux';
import { setConversation, getEvents } from '../../actions/chat';
function Conversations({ chat, auth, setConversation, getEvents }) {
  const onClick = conversation => {
    setConversation(conversation);
    getEvents(conversation._id);
  };
  return (
    <ConversationsComp
      conversations={chat.conversations}
      auth={auth}
      onClick={onClick}
    />
  );
}

Conversations.propTypes = {};
const mapStateToProps = state => ({
  chat: state.chat,
  auth: state.auth,
});
export default connect(mapStateToProps, { setConversation, getEvents })(
  Conversations
);
