import {
  NOW_WRITTEN,
  MODIFY_DISABLE,
  SIDEBAR_TARGET,
  SIDEBAR_CONTROLL,
} from "./type";

export const initalState = {
  nowWritten: null,
  disable: true,
  target: "",
  sideControll: false,
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
export const sidebarControllAction = (bool) => {
  return {
    type: SIDEBAR_CONTROLL,
    bool,
  };
};

const etcReducer = (state = initalState, action) => {
  switch (action.type) {
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
    case SIDEBAR_CONTROLL:
      return {
        ...state,
        sideControll: action.bool,
      };
    default:
      return state;
  }
};

export default etcReducer;
