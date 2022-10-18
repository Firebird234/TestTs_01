import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import programsReducer from "./programmsSlice";
import loaderReducer from "./loaderSlice";

const rootReducer = combineReducers({
   programms: programsReducer,
   loader: loaderReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
