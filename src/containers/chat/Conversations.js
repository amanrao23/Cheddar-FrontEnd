import React from 'react'
import PropTypes from 'prop-types'
import ConversationsComp from '../../components/chat/ConversationsComp'
import { connect } from 'react-redux';

function Conversations({chat}) {
    return (
        <ConversationsComp conversations={chat.conversations}></ConversationsComp>
    )
}

Conversations.propTypes = {

}
const mapStateToProps = state => ({
    chat: state.chat,
    auth: state.auth,
  });
  export default connect(mapStateToProps,null)(Conversations);

