import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import phoneReducers from "./phoneBook/phoneBook-reducer";
import userReducers from "./auth/userReducers";
import storage from "redux-persist/lib/storage";

const defMidd = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REGISTER, PAUSE, PERSIST, PURGE, REHYDRATE],
  },
});

const authUserPersistConfig = {
  key: "authUser",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    phoneNumber: phoneReducers,
    authUser: persistReducer(authUserPersistConfig, userReducers),
  },
  middleware: [...defMidd],
});
export const persistor = persistStore(store);
