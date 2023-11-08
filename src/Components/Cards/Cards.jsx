import React from "react";
import "../Cards/Cards.scss"

export default function Cards(props){
    console.log(props);
    return(
        <div className={props.case.color}>
            <p className="">
             {props.case.name}
            </p>
            <p className="">
             {props.case.info_1}
            </p>
            <p className="">
             {props.case.info_month}
            </p>
            <p className="">
             {props.case.speed}
            </p>
            <p className="">
             {props.case.text}
            </p>
            
        </div>,

        <div className={props.case.color}>
     <p className="">
             {props.case.name_1}
            </p>
            <p className="">
             {props.case.info_1}
            </p>
            <p className="">
             {props.case.info_month_1}
            </p>
            <p className="">
             {props.case.speed_1}
            </p>
            <p className="">
             {props.case.text}
            </p>
        </div>,
          <div className={props.case.color}>
          <p className="">
                  {props.case.name_2}
                 </p>
                 <p className="">
                  {props.case.info_1}
                 </p>
                 <p className="">
                  {props.case.info_month_2}
                 </p>
                 <p className="">
                  {props.case.speed_2}
                 </p>
                 <p className="">
                  {props.case.text}
                 </p>
             </div>,
             <div className={props.case.color}>
             <p className="">
                     {props.case.name_3}
                    </p>
                    <p className="">
                     {props.case.info_1}
                    </p>
                    <p className="">
                     {props.case.info_month_3}
                    </p>
                    <p className="">
                     {props.case.speed_3}
                    </p>
                    <p className="">
                     {props.case.text}
                    </p>
                </div>


)
    }