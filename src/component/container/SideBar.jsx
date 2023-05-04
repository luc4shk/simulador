import React, {useEffect, useState} from "react";
import BarElement from "../pure/BarElement";
export default function SideBar({open}) {

   const navItems = [
    {url:"../../../public/homeIcon.png", msg:"Panel Principal", activo:false},
    {url:"../../../public/flagIcon.png",msg:"Competencias", activo:false},
    {url:"../../../public/pieIcon.png",msg:"Categorías", activo:false},
    {url:"../../../public/calIcon.png",msg:"Preguntas", activo:false},
    {url:"../../../public/userIcon.png",msg:"Estudiantes", activo:false},
    {url:"../../../public/pageIcon.png",msg:"Prueba", activo:false},
    {url:"../../../public/bookIcon.png",msg:"Convocatoria", activo:false},
    {url:"../../../public/outIcon.png",msg:"Cerrar Sesión", activo:false}
  ]

  const [items, setItems] = useState(navItems)
  const [isOpen, setOpen] = useState(true)



  function selected(index){
    const newItems = [...items];
    newItems.map((item, i) => {
      if (i === index) {
        item.activo = true;
      } else {
        item.activo = false;
      }
    });
    setItems(newItems);

  }
  
  return (
    <>
    <nav className={`fixed top-0 left-0 h-full w-60 bg-secuandario transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-300`}>{
        console.log(isOpen)
      }
    <div className="flex flex-col h-full gap-8 items-center p-5">
        <header>
          <div className="flex flex-col gap-2 items-center">
            <img className="w-32 h-32 border border-2 border-selectOption object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"></img>
            <span className="font-bold">Camila Manrique</span>
            <span>Admin</span>
          </div>
        </header>
      
        <div className="px-4">
          <div  className="">
            <ul className="flex flex-col gap-2">
            {items.map(({url, msg, activo},index)=>{
             return (
             <BarElement key={index} url={url} msg={msg} index={index} seleccion={selected} activo={activo}/>
             )
            })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </> 
  );
  
}
