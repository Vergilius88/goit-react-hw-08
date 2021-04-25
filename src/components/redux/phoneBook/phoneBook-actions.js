import { createAction } from "@reduxjs/toolkit";

const findContact = createAction("FIND_CONTACT");
const notifyValue = createAction("NOTIFY_VALUE");

const signupFormSubmitName = createAction("SIGNUP_FORM_NAME");
const signupFormSubmitNumber = createAction("SIGNUP_FORM_NUMBER");

const addPhoneRequest = createAction("POST/phoneRequest");
const addPhoneSuccess = createAction("POST/phoneSuccess");
const addPhoneError = createAction("POST/phoneError");

const getPhoneRequest = createAction("GET/phoneRequest");
const getPhoneSuccess = createAction("GET/phoneSuccess");
const getPhoneError = createAction("GET/phoneError");

const delPhoneRequest = createAction("DELETE/phoneRequest");
const delPhoneSuccess = createAction("DELETE/phoneSuccess");
const delPhoneError = createAction("DELETE/phoneError");

const patchPhoneRequest = createAction("PATCH/phoneRequest");
const patchPhoneSuccess = createAction("PATCH/phoneSuccess");
const patchPhoneError = createAction("PATCH/phoneError");

export default {
  findContact,
  notifyValue,

  signupFormSubmitName,
  signupFormSubmitNumber,

  addPhoneRequest,
  addPhoneSuccess,
  addPhoneError,

  getPhoneRequest,
  getPhoneSuccess,
  getPhoneError,

  delPhoneRequest,
  delPhoneSuccess,
  delPhoneError,

  patchPhoneRequest,
  patchPhoneSuccess,
  patchPhoneError,
};
