
// import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import CartSlice from "./Reduxtoolkitfeature/CartSlice";
// import taskReducer from "./Reducers/taskReducer";

const store = configureStore({ reducer: { cart: CartSlice } });
export const sendData = async () => {
      const d = store.getState().cart.cartItems;
      const localstrorage = localStorage.setItem("cartuser", JSON.stringify(d));

};



export default store;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;




