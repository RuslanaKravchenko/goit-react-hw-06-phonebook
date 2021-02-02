import { combineReducers } from 'redux';
import {
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  CONTACTS_FROM_LS,
  SET_FILTER,
  GET_CONTACT_BY_ID,
  EDIT_CONTACT,
} from '../contactsTypes';

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_CONTACT:
      return [...state, action.payload];

    case DELETE_CONTACT:
      return state.filter(item => item.id !== action.payload);

    case CONTACTS_FROM_LS:
      return [...action.payload];

    case EDIT_CONTACT:
      return state.map(item =>
        item.id === action.payload.id ? { ...action.payload } : item,
      );

    default:
      return state;
  }
};

const contactByIdReducer = (state = '', action) => {
  switch (action.type) {
    case GET_CONTACT_BY_ID:
      return action.payload;

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  idValue: contactByIdReducer,
});
