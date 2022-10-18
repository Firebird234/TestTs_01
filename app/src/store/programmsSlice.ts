import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProgramms } from "./AsyncFunc/programms";

export type ProgrammType = Array<{}>;

type Data = {
   _id: string,
   specializedSubjects: Array<{_id: string, string: string}>,
   title: string,
}

type InitialState = {
status: null | string,
data: [Data?]
}

const initialState: InitialState = {
   status: null, data: []
}

const programmsSlice = createSlice({
   name: "PROGRAMMS",
   initialState,
   reducers: {
   },
   extraReducers: {
      [fetchProgramms.pending.type]: (state) => {
         state.status = "pending";
      },
      [fetchProgramms.fulfilled.type]: (state, action:PayloadAction<[]>) => {
         state.status = "resolved";
         state.data = action.payload;
      },
      [fetchProgramms.rejected.type]: (state) => {
         state.status = "rejected";
      },
   },
});

export const {  } = programmsSlice.actions;
export default programmsSlice.reducer;
