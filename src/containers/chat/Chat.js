import React, { useEffect } from "react";
import ChatComp from "../../components/chat/ChatComp";
import { getConversations } from "../../actions/chat";
import { connect } from "react-redux";
// import io from "socket.io-client";
import PropTypes from "prop-types";
import socket from "../../socketConfig"
// const ENDPOINT = "http://localhost:5000";

// let socket;
const Chat = ({ getConversations, auth, chat }) => {
  const username = auth.user.username;
  const conversations = chat.conversations;
  useEffect(() => {
    getConversations();
  }, []);
  useEffect(() => {
    // socket = io(ENDPOINT, { transports: ["websocket", "polling"] });

    if (auth.user.username !== undefined) {
      socket.emit("join", { username,conversations }, (error) => {
        if (error) {
          alert(error);
        }
      });
    }
  }, [auth]);
  return <ChatComp />;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  chat: state.chat,
});

export default connect(mapStateToProps, { getConversations })(Chat);
