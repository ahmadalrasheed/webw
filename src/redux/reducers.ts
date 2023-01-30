import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import localforage from "localforage";
import { navController } from "../services/apis";

const authPersistConfig = {
  key: "auth",
  storage: localforage,
  whiteList: ["entities"],
};
const authPersistReducer = persistReducer(
  authPersistConfig,
  navController.navSlice.reducer
);

const reducers = combineReducers({
  auth: authPersistReducer,
  items: navController.navSlice.reducer,
});

export default reducers;
