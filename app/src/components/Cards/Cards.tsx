import "./Cards.css";
import { FC, ReactElement } from "react";

export function Cards() {
   return (
      <div className="cards">
         <div className="card">
            <div className="card__corner"></div>
            <h3 className="card__title">Практические модули</h3>
            <p className="card__description">
               Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
            </p>
         </div>

         <div className="card card_black">
            <h3 className="card__title">Итоговая аттестация</h3>
            <ul className="card__list">
               <li className="card__listEl">
                  Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по
                  бизнес-&nbsp;проектированию)
               </li>
               <li className="card__listEl">Защита итоговой аттестационной работы</li>
            </ul>
         </div>
      </div>
   );
}
