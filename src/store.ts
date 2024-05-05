
// import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import CartSlice from "./Reduxtoolkitfeature/CartSlice";
// import taskReducer from "./Reducers/taskReducer";

const store = configureStore({ reducer: { cart: CartSlice } });
export const sendData = async () => {
  try {
    let d = store.getState();
    const res = await fetch(`http://localhost:9000/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d.cart),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error at adding product to cart (services) => " + error);
  }
};



export default store;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;




