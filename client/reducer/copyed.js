import { COPYED } from "./type";

export const initalState = {
  copyed: null,
};

export const copyAction = (text) => {
  return {
    type: COPYED,
    text,
  };
};

const copyReducer = (state = initalState, action) => {
  switch (action.type) {
    case COPYED:
      return {
        ...state,
        copyed: action.text,
      };
    default:
      return state;
  }
};

export default copyReducer;
