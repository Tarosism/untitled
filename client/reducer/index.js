import { HYDRATE } from "next-redux-wrapper"; //서버사이드랜더링을 위한 하이드레이트
import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  userReducer,
});

export default rootReducer;
