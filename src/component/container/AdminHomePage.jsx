import React from "react";
import NavBar from "./NavBar";

export default function AdminHomePage({ change, estado }) {
  return (
    <div
      className={`absolute h-full  ${
        estado ? "left-[240px] w-[calc(100%-240px)]" : "left-0 w-full"
      } transition-all duration-300`}
    >
      <NavBar cambiar={change} />
      <div className="p-5 flex">
        <div className="">
          <form className="w-full flex flex-col" action="">
            <label>Nombre</label>
            <input type="text" name="" id="" />
            <label>Apellido</label>
            <input type="text" name="" id="" />

            <label>Dirección</label>
            <input type="text" name="" id="" />
            <label>Correo Institucional</label>
            <input type="text" name="" id="" />
            <label>Número de Documento</label>
            <input type="text" name="" id="" />
            <label>Celular</label>
            <input type="text" name="" id="" />
            <label>Teléfono</label>
            <input type="text" name="" id="" />
            <label>Código</label>
            <input type="text" name="" id="" />
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}
