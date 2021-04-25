import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.phoneNumber.userContact.contacts;
export const getNotifyName = (state) => state.phoneNumber.notifyName;
export const getFilter = (state) => state.phoneNumber.filter;
export const getName = (state) => state.phoneNumber.signupForm.name;
export const getNumber = (state) => state.phoneNumber.signupForm.number;
export const getLoading = (state) => state.phoneNumber.loading;

export const getItems = createSelector(
  [(_, ownProps) => ownProps, getContacts],
  (ownProps, contacts) => {
    return contacts.find((item) => item.id === ownProps.id);
  }
);

export const getContact = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
