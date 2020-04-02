import { actionTypes } from "../../constants.js";

export const contactsFetched = contacts => ({
  type: actionTypes.fetchContacts,
  contacts
});
