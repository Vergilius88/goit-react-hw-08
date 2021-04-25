import axios from "axios";

import phoneActions from "./phoneBook-actions";

const addRequest = (item) => async (dispatch) => {
  try {
    await dispatch(phoneActions.addPhoneRequest());

    const contact = await axios.post(`contacts`, { ...item });

    await dispatch(phoneActions.addPhoneSuccess(contact.data));

    return;
  } catch (error) {
    return dispatch(phoneActions.addPhoneError(error));
  }
};

const getRequest = () => async (dispatch) => {
  try {
    await dispatch(phoneActions.getPhoneRequest());

    const contact = await axios.get(`contacts`);

    await dispatch(phoneActions.getPhoneSuccess(contact.data));

    return;
  } catch (error) {
    return dispatch(phoneActions.getPhoneError(error));
  }
};

const delRequest = (id) => async (dispatch) => {
  try {
    await dispatch(phoneActions.delPhoneRequest());

    await axios.delete(`contacts/${id}`);
    await dispatch(phoneActions.delPhoneSuccess(id));
    return;
  } catch (error) {
    return dispatch(phoneActions.delPhoneError(error));
  }
};

const patchRequest = (id) => async (dispatch) => {
  try {
    await dispatch(phoneActions.patchPhoneRequest());

    const contact = await axios.patch(`contacts/${id}`, {
      completed: true,
    });

    await dispatch(phoneActions.patchPhoneSuccess(contact.data));
  } catch (error) {
    return dispatch(phoneActions.patchPhoneError(error));
  }
};

export default {
  addRequest,
  getRequest,
  delRequest,
  patchRequest,
};
