import { LOG_IN, LOG_OUT, NOVEL_TITLE_FIX, NOVEL_INFO_FIX } from "./type";

export const initalState = {
  isLoggedIn: false,
  me: null,
};

export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};

export const logoutAction = () => {
  return {
    type: LOG_OUT,
  };
};

export const novelTitleFixAction = (title, id) => {
  return {
    type: NOVEL_TITLE_FIX,
    title,
    id,
  };
};

export const novelInfoFixAction = (info, id) => {
  return {
    type: NOVEL_INFO_FIX,
    info,
    id,
  };
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    case NOVEL_TITLE_FIX:
      const titleIdx = state.me.novelList.findIndex(
        (fill) => fill.id === Number(action.id)
      );
      const titleFixArr = [...state.me.novelList];
      titleFixArr[titleIdx].title = action.title;
      return {
        ...state,
        me: { ...state.me, novelList: titleFixArr },
      };
    case NOVEL_INFO_FIX:
      const infoIdx = state.me.novelList.findIndex(
        (fill) => fill.id === Number(action.id)
      );
      const infoFixArr = [...state.me.novelList];
      infoFixArr[infoIdx].info = action.info;
      return {
        ...state,
        me: { ...state.me, novelList: infoFixArr },
      };
    default:
      return state;
  }
};

export default userReducer;
