import { useEffect, useState } from "react";
import "./SlideModule.css";

interface Discipline {
   _id: string,
   string: string
}


interface Module {
   module: Array<Discipline>,
   number: number   
}



export function SlideModule({ module, number }: Module) {
   const [popup, setPopup] = useState(true);

   function handlePopup() {
      setPopup(!popup);
   }
   return (
      <div className="slideProgram">
         <div className={`slideProgram__module`}>
            <div
               onClick={handlePopup}
               className={`slideProgram__moduleNumber ${popup && "slideProgram__moduleNumber_active"}`}
            >
               <button
                  type="button"
                  className={`slideProgram_moduleButton ${popup && "slideProgram_moduleButton_active"}`}
               ></button>
               {number}&nbsp;модуль
            </div>
            <ul className={`slideProgram__disciplines ${popup && "slideProgram__disciplines_active"}`}>
               {module.map((el) => {
                  return (
                     <li key={el._id} className="slideProgram__discipline">
                        {el.string}
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}
