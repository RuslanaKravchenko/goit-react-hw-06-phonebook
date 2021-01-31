import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import contactsReducer from './contacts/reducers/contactsReducer';
import { noticeReducer } from './notice/noticeReducer';
import { modalReducer } from './modal/modalReducer';

const rootReducer = combineReducers({
  phonebookContacts: contactsReducer,
  phonebookNotice: noticeReducer,
  phonebookModal: modalReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
