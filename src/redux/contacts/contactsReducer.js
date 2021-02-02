import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addNewContact,
  deleteContact,
  getContactsFromLS,
  editContact,
  setFilter,
  getIdValue,
} from './contactsActions';

const onEditContact = (state, action) =>
  state.map(item =>
    item.id === action.payload.id ? { ...action.payload } : item,
  );

const onDeleteContact = (state, action) =>
  state.filter(item => item.id !== action.payload);

const contactsReducer = createReducer([], {
  [addNewContact]: (state, action) => [...state, action.payload],
  [deleteContact]: onDeleteContact,
  [getContactsFromLS]: (_, action) => [...action.payload],
  [editContact]: onEditContact,
});

const contactByIdReducer = createReducer('', {
  [getIdValue]: (_, action) => action.payload,
});

const filterReducer = createReducer('', {
  [setFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  idValue: contactByIdReducer,
});
