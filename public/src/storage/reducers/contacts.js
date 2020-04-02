import { actionTypes } from "../../constants.js";

export const contacts = (state = [], action) => {
  switch (action.type) {
    case actionTypes.fetchContacts:
      return [...action.contacts];
    default:
      return state;
  }
};
