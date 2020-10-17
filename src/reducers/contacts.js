import { DELETE_CONTACT } from "../actions/constants/action-types";
import { contacts } from "../static-data";

export default (state = contacts, action) => {
  switch (action.type) {
    case DELETE_CONTACT:
      const contactId = action.payload;
      const { [contactId]: deleted, ...newState } = state;
      return newState;
    default:
      return state;
  }
};
