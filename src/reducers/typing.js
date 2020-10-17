import {
  EDIT_MESSAGE,
  SEND_MESSAGE,
  SET_TYPING,
} from "../actions/constants/action-types";

export default (state = "", action) => {
  switch (action.type) {
    case SET_TYPING:
      return action.payload;
    case SEND_MESSAGE:
      return "";
    case EDIT_MESSAGE:
      return action.payload.text;
    default:
      return state;
  }
};
