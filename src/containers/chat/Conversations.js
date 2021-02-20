import React from 'react';
import PropTypes from 'prop-types';
import ConversationsComp from '../../components/chat/ConversationsComp';
import { connect } from 'react-redux';
import { setConversation } from '../../actions/chat';
function Conversations({ chat, auth, setConversation }) {
  const onClick = conversation => {
    setConversation(conversation);
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
export default connect(mapStateToProps, { setConversation })(Conversations);
