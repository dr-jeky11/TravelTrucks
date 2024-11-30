import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import camperReducer from "../redux/slice";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "campers",
  storage,
  whitelist: ["campers"],
};
const persistedCamperReducer = persistReducer(persistConfig, camperReducer);
export const store = configureStore({
  reducer: {
    campers: persistedCamperReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});
export const persistor = persistStore(store);
