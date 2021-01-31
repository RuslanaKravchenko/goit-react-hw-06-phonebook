import { SHOW_MODAL, HIDE_MODAL } from './modalTypes';

export const showModal = content => ({
  type: SHOW_MODAL,
  payload: content,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
