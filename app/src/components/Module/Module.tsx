import "./Module.css";

interface Discipline {
   _id: string,
   string: string
}

interface ModuleType {
   module: Array<Discipline>, 
   number: number
}





export function Module({ module, number }: ModuleType) {
   return (
      <div className={`module`}>
         <div className="module__moduleNumber">{number}&nbsp;модуль</div>
         <ul className="module__disciplines">
            {module.map((el) => {
               return (
                  <li key={el._id} className="module__discipline">
                     {el.string}
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
