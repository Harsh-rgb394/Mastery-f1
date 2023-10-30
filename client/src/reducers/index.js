import { combineReducers } from "redux";

import posts from "./messages";
import authreducer from "./Auth";

export const reducers = combineReducers({ posts,authreducer });
