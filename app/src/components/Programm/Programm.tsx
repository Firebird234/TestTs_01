import { useEffect, useState } from "react";
import { Module } from "../Module/Module";
import { SlideModule } from "../SlideModule/SlideModule";
import "./Programm.css";

interface Discipline {
   _id: string,
   string: string
}

interface ProgrammType {
   programm: {   
      title: string,
      specializedSubjects: Array<Discipline>}

}



export function Programm({ programm }: ProgrammType) {
   const [disciplines, setDisciplines] = useState<Array<Discipline>>([]);
   const [width, setWidth] = useState<Boolean>(false);

   function handleResize() {
      document.documentElement.clientWidth < 600 ? setWidth(true) : setWidth(false);
   }

   useEffect(() => {
      document.documentElement.clientWidth < 600 ? setWidth(true) : setWidth(false);
      setDisciplines(programm.specializedSubjects);
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <div className="programm">
         <h2 className="programm__title">{programm.title}</h2>
         <div className="programm__modules">
            {width ? (
               <>
                  <SlideModule module={disciplines.slice(0, Math.floor(disciplines.length / 2))} number={1} />
                  <SlideModule module={disciplines.slice(Math.floor(disciplines.length / 2))} number={2} />
               </>
            ) : (
               <>
                  <Module module={disciplines.slice(0, Math.floor(disciplines.length / 2))} number={1} />
                  <Module module={disciplines.slice(Math.floor(disciplines.length / 2))} number={2} />
               </>
            )}
         </div>
      </div>
   );
}
