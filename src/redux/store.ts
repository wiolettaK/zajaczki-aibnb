import { configureStore } from "@reduxjs/toolkit";
import guestCounter from "./guest-counter";


/* Redux Toolkit store object */
export const store = configureStore({
  reducer: {
      guestCounter: guestCounter,
      // innyCounter: innyReducer
  },
  /* Needed for enabling of debugging trough browser redux plugin */
  // composeEnhancers: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

/*
{
  guestCounter: {
    adults: 0,
    children: 0
  }

}
*/

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
