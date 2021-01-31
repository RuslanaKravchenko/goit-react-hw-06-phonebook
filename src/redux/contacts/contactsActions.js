import {
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  CONTACTS_FROM_LS,
  SET_FILTER,
  GET_CONTACT_BY_ID,
  EDIT_CONTACT,
} from './contactsTypes';
import { v4 as uuidv4 } from 'uuid';

export const addNewContact = contact => ({
  type: ADD_NEW_CONTACT,
  payload: { ...contact, id: uuidv4() },
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const getContactsFromLS = contacts => ({
  type: CONTACTS_FROM_LS,
  payload: contacts,
});

export const setFilter = value => ({
  type: SET_FILTER,
  payload: value,
});

export const getIdValue = id => ({
  type: GET_CONTACT_BY_ID,
  payload: id,
});

export const editContact = contact => ({
  type: EDIT_CONTACT,
  payload: contact,
});
