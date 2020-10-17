import { EDIT_MESSAGE } from "../actions/constants/action-types";

export default (state = null, action) => {
  switch (action.type) {
    case EDIT_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
