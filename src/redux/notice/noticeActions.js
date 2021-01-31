import { HIDE_NOTICE_MESSAGE, SHOW_NOTICE_MESSAGE } from './noticeTypes';

export const showNoticeMessage = message => ({
  type: SHOW_NOTICE_MESSAGE,
  payload: message,
});

export const hideNoticeMessage = message => ({
  type: HIDE_NOTICE_MESSAGE,
  payload: message,
});
