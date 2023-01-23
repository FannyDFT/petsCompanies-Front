import React from "react";
import NavBar from "./NavBar";
import Image from "next/image";

function Onglet() {
  return (
    <div className="flex items-center bg-slate-50 rounded-lg py-2 px-4 space-x-9">
      <Image src="/assets/logo.png" width={150} height={80} alt="logo" />
      <NavBar />
    </div>
  );
}

export default Onglet;
