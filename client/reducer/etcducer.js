import {
  MODIFY_DATA,
  NOW_WRITTEN,
  MODIFY_DISABLE,
  SIDEBAR_TARGET,
} from "./type";

export const initalState = {
  modifyData: null,
  nowWritten: null,
  disable: true,
  target: "",
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
export const modifyDisableAction = () => {
  return {
    type: MODIFY_DISABLE,
  };
};
export const sidebarTargetAction = (target) => {
  return {
    type: SIDEBAR_TARGET,
    target,
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
    case MODIFY_DISABLE:
      return {
        ...state,
        disable: !state.disable,
      };
    case SIDEBAR_TARGET:
      return {
        ...state,
        target: action.target,
      };
    default:
      return state;
  }
};

export default etcReducer;
