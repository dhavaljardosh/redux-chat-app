import React from "react";
import store from "../../store";
import { sendMessage, setTyping } from "../../actions";
import "./MessageInput.css";
const MessageInput = ({ value }) => {
  const handleChange = (e) => {
    store.dispatch(setTyping(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { typing, activeUserId } = store.getState();
    store.dispatch(sendMessage(typing, activeUserId));
  };

  return (
    <form className="Message" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={store.getState().typing}
        placeholder="write a message"
      />
    </form>
  );
};
export default MessageInput;
