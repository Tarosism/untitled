import {
  LOG_IN,
  LOG_OUT,
  NOVEL_TITLE_FIX,
  NOVEL_INFO_FIX,
  NOVEL_SELECTED,
  SYNOPSIS_TITLE_FIX,
} from "./type";

export const initalState = {
  isLoggedIn: false,
  me: null,
  record: null,
  nowSelect: null,
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

export const updateNowSelectAction = (select) => {
  return {
    type: NOVEL_SELECTED,
    select,
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

export const synopsisTitleFixAction = (title, id) => {
  return {
    type: SYNOPSIS_TITLE_FIX,
    title,
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
    case NOVEL_SELECTED:
      return {
        ...state,
        nowSelect: action.select,
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
    case SYNOPSIS_TITLE_FIX:
      const sTitleIdx = state.nowSelect.synopsis.findIndex(
        (fill) => fill.id === Number(action.id)
      );
      const sTitleMatchNovel = state.me.novelList.findIndex(
        (fill) => fill.id === state.nowSelect.id
      );
      const sTitleArr = [...state.me.novelList];
      sTitleArr[sTitleMatchNovel].synopsis[sTitleIdx].title = action.title;
      //이거 맨 위에 함수로 만들어서 찍어내도 되겠다. 내일은 그거 하자
      //&nbsp로 띄어쓰기가 뜨는 것도 어떻게 없애냐
      return {
        ...state,
        me: { ...state.me, novelList: sTitleArr },
      };
    default:
      return state;
  }
};

export default userReducer;
