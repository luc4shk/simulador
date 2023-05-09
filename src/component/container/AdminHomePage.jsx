import React from "react";
import NavBar from "./NavBar";
// import { Button, ButtonGroup } from '@chakra-ui/react'

export default function AdminHomePage({ change, estado }) {
  return (
    <div
      className={`absolute ${
        estado ? "left-[240px] w-[calc(100%-240px)]" : "left-0 w-full"
      } transition-all duration-300`}
    >
      <NavBar cambiar={change} />
      <div className="font-semibold bg-secuandario p-5 flex  justify-center  w-full min-h-screen">
        <div className="bg-white rounded-md p-5 w-[500px] ">
          <div className="flex justify-center mb-5">
          <img className="w-32 h-32 border border-2 border-selectOption object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"/>
          <button className="absolute w-8 h-8 translate-x-11 translate-y-[94px] bg-principal rounded-full"><img src="https://img.icons8.com/?size=512&id=tWt9XCfjK1WM&format=png" alt="" className="w-5 h-5 m-auto" /></button>
          </div>
          <form className=" flex flex-col gap-5" action="">
            <div className="flex gap-5 w-full">
              <div className="flex flex-col gap-5 w-full">
                <label>Nombre</label>
                <input
                  className="border rounded-2xl"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-5 w-full">
                <label className="">Apellido</label>
                <input
                  className="border rounded-2xl"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <label>Dirección</label>
            <input className="border rounded-2xl" type="text" name="" id="" />
            <label>Correo Institucional</label>
            <input className="border rounded-2xl" type="text" name="" id="" />
            <div className="flex gap-5">
              <div className="flex flex-col gap-5 w-full">
                <label>Número de Documento</label>
                <input
                  className="border rounded-2xl"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-5 w-full">
                <label>Celular</label>
                <input
                  className="border rounded-2xl"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-5 w-full">
                <label>Teléfono</label>
                <input
                  className="border rounded-2xl"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-5 w-full">
                <label>Código</label>
                <input
                  className="border rounded-2xl"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <button className="border bg-principal text-white rounded-2xl w-44 p-2">
                Editar Información
              </button>
              <button className="border bg-principal text-white rounded-2xl w-44 p-2">
                Siguiente
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}
