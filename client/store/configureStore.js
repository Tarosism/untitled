import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const configureStore = () => {
  const middlewere = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewere)) //개발용 미들웨어 설정
      : composeWithDevTools(applyMiddleware(...middlewere)); //배포용 미들웨어 설정(devtool연결)
  const stroe = createStore(rootReducer, enhancer);
  return stroe;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
