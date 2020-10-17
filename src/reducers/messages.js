import {
  DELETE_MESSAGE,
  EDIT_MESSAGE,
  SEND_MESSAGE,
} from "../actions/constants/action-types";
import { getMessages } from "../static-data";

const messages = getMessages(10);

export default (state = messages, actions) => {
  switch (actions.type) {
    case SEND_MESSAGE: {
      let newMessages = JSON.parse(JSON.stringify(state));
      let msgObj = newMessages[actions.payload.userId];
      // New Message here
      msgObj[Object.keys(msgObj).length] = {
        number: Object.keys(msgObj).length,
        text: actions.payload.message,
        is_user_msg: true,
      };
      return newMessages;
    }
    case EDIT_MESSAGE: {
      return state;
    }
    case DELETE_MESSAGE: {
      let newMessages = JSON.parse(JSON.stringify(state));
      let msgObj = newMessages[actions.payload.userId];
      delete msgObj[actions.payload.messageId];
      return newMessages;
    }
    default: {
      return state;
    }
  }
};
