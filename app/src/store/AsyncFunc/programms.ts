import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getData } from "../../utils/Api";
import { setLoader } from "../loaderSlice";


type Data = {
   _id: string,
   specializedSubjects: Array<{_id: string, string: string}>,
   title: string,
}
type Programms = Array<Data>;

export const fetchProgramms = createAsyncThunk<Programms>("PROGRAMMS/FETCH__PROGRAMMS", async () => {
   const response = await getData();
   return response;
});
