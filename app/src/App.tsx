import './App.css';
import { Main } from './components/Main/Main';
import { useEffect } from 'react';
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import { fetchProgramms } from './store/AsyncFunc/programms';
import { setLoader } from './store/loaderSlice';
import Loader from './components/Loader/Loader';
import { AppDispatch, RootState } from './store';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import NotFound from './components/NotFound/NotFound';

function App() {
const programms = useAppSelector((state) => state.programms);
const dispatch = useAppDispatch();
const isLoading = useAppSelector((state) => state.loader)


  useEffect(() => {
    dispatch(fetchProgramms());
  },[])

  useEffect(() => {
    programms.data.length > 0 && dispatch(setLoader(false));
    programms.status === "rejected" && dispatch(setLoader(false));
    programms.status === "rejected" && console.log(programms.status === "rejected")

  },[programms])


  return (
    <div className="App">
{isLoading ? <Loader/> : 
(programms.status === "rejected" ? <NotFound/> : <Main/>)}
    </div>
  );
}

export default App;
