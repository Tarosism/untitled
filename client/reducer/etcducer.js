import { MODIFY_DATA, NOW_WRITTEN } from "./type";

export const initalState = {
  modifyData: null,
  nowWritten: null,
};

export const modifyDataAction = (data) => {
  return {
    type: MODIFY_DATA,
    data,
  };
};
export const nowWrittenAction = (data) => {
  return {
    type: NOW_WRITTEN,
    data,
  };
};

const etcReducer = (state = initalState, action) => {
  switch (action.type) {
    case MODIFY_DATA:
      return {
        ...state,
        modifyData: action.data,
      };
    case NOW_WRITTEN:
      return {
        ...state,
        nowWritten: action.data,
      };
    default:
      return state;
  }
};

export default etcReducer;
