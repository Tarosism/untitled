import {
  LOG_IN,
  LOG_OUT,
  NOVEL_TITLE_FIX,
  NOVEL_INFO_FIX,
  NOVEL_SELECTED,
  SYNOPSIS_TITLE_FIX,
  SYNOPSIS_TEXT_FIX,
  ADD_SYNOPSIS,
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

export const synopsisTextFixAction = (text, id) => {
  return {
    type: SYNOPSIS_TEXT_FIX,
    text,
    id,
  };
};

export const addSynopsisAction = (data) => {
  return {
    type: ADD_SYNOPSIS,
    data,
  };
};

const userReducer = (state = initalState, action) => {
  const findIndexTool = (arr, num) =>
    arr.findIndex((fill) => fill.id === Number(num));

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
      const titleIdx = findIndexTool(state.me.novelList, action.id);
      const titleFixArr = [...state.me.novelList];
      titleFixArr[titleIdx].title = action.title;
      return {
        ...state,
        me: { ...state.me, novelList: titleFixArr },
      };
    case NOVEL_INFO_FIX:
      const infoIdx = findIndexTool(state.me.novelList, action.id);
      const infoFixArr = [...state.me.novelList];
      infoFixArr[infoIdx].info = action.info;
      return {
        ...state,
        me: { ...state.me, novelList: infoFixArr },
      };
    case SYNOPSIS_TITLE_FIX:
      const sTitleIdx = findIndexTool(state.nowSelect.synopsis, action.id);
      const sTitleMatchNovel = findIndexTool(
        state.me.novelList,
        state.nowSelect.id
      );
      const sTitleArr = [...state.me.novelList];
      sTitleArr[sTitleMatchNovel].synopsis[sTitleIdx].title = action.title;

      return {
        ...state,
        me: { ...state.me, novelList: sTitleArr },
      };
    case SYNOPSIS_TEXT_FIX:
      const sTextIdx = findIndexTool(state.nowSelect.synopsis, action.id);
      const sTextMatchNovel = findIndexTool(
        state.me.novelList,
        state.nowSelect.id
      );
      const sTextArr = [...state.me.novelList];
      sTextArr[sTextMatchNovel].synopsis[sTextIdx].text = action.text;

      return {
        ...state,
        me: { ...state.me, novelList: sTextArr },
      };
    case ADD_SYNOPSIS:
      const sAddIdx = findIndexTool(
        state.nowSelect.synopsis,
        state.nowSelect.id
      );
      const sAddArr = [...state.me.novelList];
      sAddArr[sAddIdx].synopsis.push(action.data);
      return {
        ...state,
        me: { ...state.me, novelList: sAddArr },
      };
    default:
      return state;
  }
};

export default userReducer;
