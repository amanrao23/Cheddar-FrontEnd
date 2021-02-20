import React, { useEffect } from "react";
import ChatComp from "../../components/chat/ChatComp";
import { getConversations } from "../../actions/chat";
import { connect } from "react-redux";
import io from "socket.io-client";
import PropTypes from "prop-types";

const ENDPOINT = "http://localhost:5000";

let socket;
const Chat = ({ getConversations, auth }) => {
  const username = auth.user.username;
  useEffect(() => {
    getConversations();
  }, []);
  useEffect(() => {
    socket = io(ENDPOINT, { transports: ["websocket", "polling"] });

    if (auth.user.username !== undefined) {
      console.log("AAAAAAAA");
      socket.emit("join", { username }, (error) => {
        if (error) {
          alert(error);
        }
      });
    }
  }, [ENDPOINT, auth]);
  return <ChatComp />;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getConversations })(Chat);
