import React, { Component } from "react";
import { deleteMessage, editMessage } from "../../actions";
import store from "../../store";
import "./Chats.css";
const Chat = ({ message }) => {
  const { activeUserId } = store.getState();
  const { text, is_user_msg, number } = message;
  const handleEdit = () => {
    if (!is_user_msg) {
      return;
    }
    // Edit Message
    store.dispatch(editMessage(number, activeUserId, text));
  };
  return (
    <span
      className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}
      onDoubleClick={handleEdit}
    >
      {is_user_msg && (
        <span
          className="delete-message"
          onClick={() => store.dispatch(deleteMessage(number, activeUserId))}
        >
          X
        </span>
      )}

      {text}
    </span>
  );
};
class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map((message) => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}
export default Chats;
