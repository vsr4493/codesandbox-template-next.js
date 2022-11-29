import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { gleanSearchReducer } from "./GleanSearchRedux";

export const createStore = () => {
  const middlewares = [];
  return configureStore({
    reducer: {
      gleanSearch: gleanSearchReducer,
    },
    undefined,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(...middlewares),
  });
};

export default createStore();

export const useAppDispatch = () => useDispatch();

export const useAppSelector = useSelector;
