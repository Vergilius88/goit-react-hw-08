import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phoneAction from "./phoneBook-actions";

const findContact = (_, action) => action.payload;
const notifyValue = (_, action) => action.payload;

//-----------PATCH-----------------
const patchSuccess = (state, action) => ({
  ...state,
  contacts: [
    ...state.contacts.map((item) => {
      return item.id === action.payload.id
        ? { ...item, completed: !item.completed }
        : item;
    }),
  ],
});
//---------------delete----------
const delSuccess = (state, action) => ({
  ...state,
  contacts: [...state.contacts.filter(({ id }) => id !== action.payload)],
});
//-----------GET------------
const getSuccess = (state, action) => ({
  ...state,
  contacts: [...action.payload],
});

//---------------------POST
const addSuccess = (state, action) => ({
  ...state,
  contacts: [...state.contacts, action.payload],
});

const addError = (state, action) => ({
  ...state,
  contacts: [...state.contacts, action.payload],
});

const initialStateContact = {
  contacts: [],
};

const userContact = createReducer(initialStateContact, {
  // [phoneAction.findContact]: findContact,
  // [phoneAction.notifyValue]: notifyValue,

  [phoneAction.patchPhoneSuccess]: patchSuccess,

  [phoneAction.delPhoneSuccess]: delSuccess,
  [phoneAction.getPhoneSuccess]: getSuccess,
  [phoneAction.addPhoneSuccess]: addSuccess,
  [phoneAction.addPhoneError]: addError,
});

const notifyName = createReducer("", {
  [phoneAction.notifyValue]: notifyValue,
});

const filter = createReducer("", {
  [phoneAction.findContact]: findContact,
});

const initialStateForm = {
  id: "",
  name: "",
  number: "",
};

const signupFormSubmitNumber = (state, action) => ({
  ...state,
  number: action.payload,
});

const signupFormSubmitName = (state, action) => ({
  ...state,
  name: action.payload,
});

const signupForm = createReducer(initialStateForm, {
  [phoneAction.signupFormSubmitNumber]: signupFormSubmitNumber,
  [phoneAction.signupFormSubmitName]: signupFormSubmitName,
});

const loading = createReducer(false, {
  [phoneAction.patchPhoneRequest]: () => true,
  [phoneAction.patchPhoneSuccess]: () => false,
  [phoneAction.patchPhoneError]: () => false,

  [phoneAction.delPhoneRequest]: () => true,
  [phoneAction.delPhoneSuccess]: () => false,
  [phoneAction.delPhoneError]: () => false,

  [phoneAction.getPhoneRequest]: () => true,
  [phoneAction.getPhoneSuccess]: () => false,
  [phoneAction.getPhoneError]: () => false,

  [phoneAction.addPhoneRequest]: () => true,
  [phoneAction.addPhoneSuccess]: () => false,
  [phoneAction.addPhoneError]: () => false,
});

export default combineReducers({
  userContact,
  loading,
  signupForm,
  notifyName,
  filter,
});
