import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Cards } from "../Cards/Cards";
import { Programm } from "../Programm/Programm";
import { SlideProgram } from "../SlideModule/SlideModule";
import "./Programms.css";

export function Programms() {
   const programms = useSelector((state) => state.programms);

   return (
      <div className="programms">
         <h1 className="programms__title">Специализированные дисциплины</h1>
         {programms.data.slice(0, 2).map((el) => {
            return <Programm programm={el} key={el._id} />;
         })}
         <Cards />
      </div>
   );
}
