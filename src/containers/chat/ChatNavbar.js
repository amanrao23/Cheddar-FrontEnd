import React from "react";
import ChatNav from "../../components/chat/ChatNav";
import { connect } from "react-redux";
function ChatNavbar({ chat, auth }) {
  return (
    <ChatNav
      conversation={chat.conversation}
      auth={auth}
      online={chat.onlineUser}
      typing={chat.typing}
    />
  );
}

ChatNavbar.propTypes = {};
const mapStateToProps = (state) => ({
  chat: state.chat,
  auth: state.auth,
});
export default connect(mapStateToProps, {})(ChatNavbar);
