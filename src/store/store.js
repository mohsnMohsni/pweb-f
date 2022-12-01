import {
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer, persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

import watcherSaga from "./sagas";
import rootReducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";

const persistConfig = {
  key: "torgay",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
      onError: (error) => {
        // tslint:disable-next-line: no-console

        storage.removeItem("persist:torgay");
      },
    }),
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(watcherSaga);

// create a makeStore function
// const makeStore: MakeStore<RootState> = (context: Context) => store;
const makeStore = (context) => store;

// export an assembled wrapper
export const wrapperRedux = createWrapper(makeStore, {
  debug: true,
});

export const persistor = persistStore(store)
