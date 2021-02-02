import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addNewContact = createAction('contacts/addContact', contact => ({
  payload: {
    ...contact,
    id: uuidv4(),
  },
}));

const deleteContact = createAction('contacts/deleteContact');
const getContactsFromLS = createAction('contacts/contactsFromLS');
const setFilter = createAction('contacts/setFilter');
const getIdValue = createAction('contacts/getIdValue');
const editContact = createAction('contacts/editContact');

export {
  addNewContact,
  deleteContact,
  getContactsFromLS,
  setFilter,
  getIdValue,
  editContact,
};
