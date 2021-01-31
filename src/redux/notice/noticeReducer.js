import { HIDE_NOTICE_MESSAGE, SHOW_NOTICE_MESSAGE } from './noticeTypes';

const initialState = {
  showNotice: false,
  message: '',
};

export const noticeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case SHOW_NOTICE_MESSAGE:
      return {
        ...state,
        showNotice: !state.showNotice,
        message: action.payload,
      };

    case HIDE_NOTICE_MESSAGE:
      return {
        ...state,
        showNotice: !state.showNotice,
      };
    default:
      return state;
  }
};
