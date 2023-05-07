import React from "react";
import NavBar from "./NavBar";
// import { Button, ButtonGroup } from '@chakra-ui/react'

export default function AdminHomePage({ change, estado }) {
  return (
    <div
      className={`absolute h-full  ${
        estado ? "left-[240px] w-[calc(100%-240px)]" : "left-0 w-full"
      } transition-all duration-300`}
    >
      <NavBar cambiar={change} />
      <div className="font-semibold p-5 flex gap-14 justify-center items-center w-full h-[calc(100%-66px)] ">
        <div className="">
          <form className="w-full flex flex-col gap-5" action="">
            <div className="flex gap-5">
              <div className="flex flex-col gap-5">
                <label>Nombre</label>
                <input className="border rounded-2xl" type="text" name="" id="" />
              </div>
              <div className="flex flex-col gap-5">
                <label className="">Apellido</label>
                <input className="border rounded-2xl" type="text" name="" id="" />
              </div>
            </div>
            <label>Dirección</label>
            <input className="border rounded-2xl" type="text" name="" id="" />
            <label>Correo Institucional</label>
            <input className="border rounded-2xl" type="text" name="" id="" />
            <div className="flex gap-5">
              <div className="flex flex-col gap-5">
                <label>Número de Documento</label>
                <input className="border rounded-2xl" type="text" name="" id="" />
              </div>
              <div className="flex flex-col gap-5">
                <label>Celular</label>
                <input className="border rounded-2xl" type="text" name="" id="" />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-5">
                <label>Teléfono</label>
                <input className="border rounded-2xl" type="text" name="" id="" />
              </div>
              <div className="flex flex-col gap-5">
                <label>Código</label>
                <input className="border rounded-2xl" type="text" name="" id="" />
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-20 h-full justify-center items-center">
          {/* <img className="w-32 h-32 border border-2 border-selectOption object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"/> */}
          {/* <Button>Hola</Button> */}
          <button className="border bg-principal text-white rounded-2xl w-44 p-2">Editar Imagen</button>
          <button className="border bg-principal text-white rounded-2xl w-44 p-2" >Editar Información</button>
          <button className="border bg-principal text-white rounded-2xl w-44 p-2" >Siguiente</button>
        </div>
      </div>
    </div>
  );
}
