import React, { useState } from "react";

export default function BarElement({url, msg, seleccion, index, activo}) {
  
 
    
  return (
    <>
      <li onClick={()=>seleccion(index)} className={`hover:bg-selectOption transition-colors  ${activo ? "bg-selectOption" : activo}  w-full rounded-xl h-11`}>
        <a className="flex items-center h-full" href="#">
          <div className="w-24 flex items-center justify-center">
            <img className="w-6" src={url}></img>
          </div>
          <span className="w-full text-left">{msg}</span>
        </a>
      </li>
    
    </>
  );
}
