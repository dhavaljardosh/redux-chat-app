import React from "react";
import store from "../../store";
import Chat from "../../components/Chat/Chats";
import Header from "../../components/Header/Header";
import _ from "lodash";
import "./ChatWindow.css";
import MessageInput from "../MessageInput/MessageInput";
const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const messages = state.messages[activeUserId];
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chat messages={_.values(messages)} />
      <MessageInput />
    </div>
  );
};
export default ChatWindow;
