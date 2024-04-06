import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: {
  cartItems: any[];
  totalQuantity: number;
  totalPrice: number;
} = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const sendUserCartinfo = createAsyncThunk(
  "cart/sendUserCartinfo",
  async (item: any, api: any) => {
    try {
      api.dispatch(addToCart(item));
      api.dispatch(getTotals());

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

export const fetchDataCart = createAsyncThunk(
  "cart/fetchDataCart",
  async () => {
    const res = await fetch("http://localhost:9000/cart", {
      cache: "no-store",
    });
    return await res.json();
    // return JSON.parse('{user:"mohamed"}');
    // try {
    //     const res = await fetch("http://localhost:9000/cart", {
    //       cache: "no-store",
    //     });
    //     const data = await res.json();

    //     return data;
    // }
    // catch(error:any){
    //     return Promise.reject(error.message);
    // }
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
          cartQuantity: state.cartItems[existingIndex].cartQuantity + action.payload.qty,
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
  },
  extraReducers(builder) {
    builder.addCase(fetchDataCart.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const { addToCart, getTotals } = CartSlice.actions;
export default CartSlice.reducer;
