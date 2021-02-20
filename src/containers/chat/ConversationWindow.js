import React from 'react'
import PropTypes from 'prop-types'
import ConversationWindowComp from '../../components/chat/ConversationWindowComp'
import { connect } from 'react-redux';

function ConversationWindow({chat}) {
    return (
       <ConversationWindowComp conversation={chat.conversation}></ConversationWindowComp>
    )
}

ConversationWindow.propTypes = {

}

const mapStateToProps = state => ({
    chat: state.chat,
    auth: state.auth,
  });
  export default connect(mapStateToProps, {})(ConversationWindow);

