import { combineReducers } from "@reduxjs/toolkit";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";


import { reducer as settingsReducer } from "./Settings";
import { reducer as notificationReducer } from "./Notification";

const rootReducer = combineReducers({
  settings: settingsReducer,
  notification: notificationReducer,
});

export default rootReducer;

export const useSelector = useReduxSelector;

export const useDispatch = useReduxDispatch;
