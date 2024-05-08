import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: {
  FavoriteItems: any[];
  cartItems: any[];
  totalQuantity: number;
  totalPrice: number;
} = {
  FavoriteItems: [],
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const sendUserCartinfo = createAsyncThunk(
  "cart/sendUserCartinfo",
  async (item: any, api: any) => {
    api.dispatch(addToCart(item));
    api.dispatch(getTotals());
    try {
      let d = api.getState();
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
  }
);
export const addFavoriteitem = createAsyncThunk(
  "cart/sendFavoriteitem",
  async (item: any, api: any) => {
    api.dispatch(addToFavorite(item));

    const d = api.getState().cart.FavoriteItems;
    const localstrorage = localStorage.setItem(
      "favoriteuser",
      JSON.stringify(d)
    );
  }
);
export const clearFavoriteList = createAsyncThunk(
  "cart/clearFavoriteList",
  async (item: any, api: any) => {
    api.dispatch(deletefromFavoriteList());
    try {
      const d = api.getState().cart.FavoriteItems;

      const res = await fetch(`http://localhost:9000/cart`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ FavoriteItems: d }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("error at clearing favorite list (services) => " + error);
    }
  }
);

export const fetchDatafavotite = createAsyncThunk(
  "cart/fetchDatafavotite",
  async () => {
    const favoriteuser = localStorage.getItem("favoriteuser");
    return favoriteuser
      ? Promise.resolve(JSON.parse(favoriteuser))
      : Promise.reject();
  }
);
export const fetchDataCart = createAsyncThunk(
  "cart/fetchDataCart",
  async () => {
    const cartuser = localStorage.getItem("cartuser");
    return cartuser ? Promise.resolve(JSON.parse(cartuser)) : Promise.reject();
  }
);
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.product.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity:
            state.cartItems[existingIndex].cartQuantity + action.payload.qty,
        };
        // toast.info("Increased product quantity", {
        //   position: "bottom-left",
        // });
      } else {
        let tempProductItem = { ...action.payload.product, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        // toast.success("Product added to cart", {
        //   position: "bottom-left",
        // });
      }
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.totalQuantity = quantity;
      state.totalPrice = total;
    },
    updateQty(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[existingIndex].cartQuantity = action.payload.qty;
    },
    deleteItem(state, action) {
      let ar = state.cartItems.filter((i) => i.id !== action.payload);
      state.cartItems = ar;
    },
    addToFavorite(state, action) {
      const existingIndex = state.FavoriteItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.FavoriteItems = state.FavoriteItems.filter(
          (i: any) => i.id !== action.payload.id
        );
      } else {
        state.FavoriteItems.push(action.payload);
      }
    },
    deletefromFavoriteList(state) {
      state.FavoriteItems = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchDatafavotite.fulfilled, (state, action) => {
      // return action.payload;
      state.FavoriteItems = action.payload;
    }),
      builder.addCase(fetchDataCart.fulfilled, (state, action) => {
        // return action.payload;
        state.cartItems = action.payload;
      });
  },
});
export const {
  addToCart,
  getTotals,
  updateQty,
  deleteItem,
  addToFavorite,
  deletefromFavoriteList,
} = CartSlice.actions;
export default CartSlice.reducer;
