import React, { useEffect } from 'react';
import ChatComp from '../../components/chat/ChatComp';
import {getConversations} from '../../actions/chat';
import { connect } from 'react-redux';

const Chat = ({getConversations}) => {
  useEffect(() => {getConversations()}, []);
  return <ChatComp></ChatComp>;
};

export default connect(null,{getConversations})(Chat);
