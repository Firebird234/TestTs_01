import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = boolean;

const initialState: InitialState = true
const loaderSlice = createSlice({
   name: "LOADER",
   initialState,
   reducers: {
      setLoader(state, action: PayloadAction<boolean>) {
         return action.payload;
      },
   },
});

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
