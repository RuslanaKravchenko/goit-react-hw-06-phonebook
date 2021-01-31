import { SHOW_MODAL, HIDE_MODAL } from './modalTypes';

const initialState = {
  isOpen: false,
  content: '',
};

export const modalReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isOpen: !state.isOpen, content: action.payload };

    case HIDE_MODAL:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
