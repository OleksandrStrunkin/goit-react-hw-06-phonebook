import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

// import contactsReducer from "./contacts/contacts-reducer";
// import filterReducer from "./filter/filter-reducer";

import rootReducer from "./root-reducer";


export const store = configureStore({
    reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: false,
          }),
});


export const persistor = persistStore(store);