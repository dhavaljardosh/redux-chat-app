import { createStore } from "redux";
import reducers from "../reducers";
import { contacts } from "../static-data";
import { getMessages } from "../static-data";
let messages = getMessages(10);
const store = createStore(reducers, { contacts, messages, typing: "" });
export default store;
