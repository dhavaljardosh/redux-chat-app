import {
  DELETE_CONTACT,
  DELETE_MESSAGE,
  EDIT_MESSAGE,
  SEND_MESSAGE,
  SET_ACTIVE_USER_ID,
  SET_TYPING,
} from "./constants/action-types";

export const setActiveUserId = (id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});

export const deleteContact = (user_id) => ({
  type: DELETE_CONTACT,
  payload: user_id,
});

export const setTyping = (value) => ({
  type: SET_TYPING,
  payload: value,
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId,
  },
});

export const editMessage = (messageId, userId, text) => ({
  type: EDIT_MESSAGE,
  payload: {
    messageId,
    userId,
    text,
  },
});

export const deleteMessage = (messageId, userId) => ({
  type: DELETE_MESSAGE,
  payload: {
    messageId,
    userId,
  },
});
