import React from "react";
import NavBar from "./NavBar";
import Image from "next/image";
import Link from "next/link";

function Onglet() {
  return (
    <div className="flex justify-center">
      <div className="flex items-center  bg-slate-50 rounded-lg py-2 px-4 space-x-9 absolute top-4 ">
        <Link href="/">
          <Image src="/assets/logo.png" width={150} height={80} alt="logo" />
        </Link>
        <NavBar />
      </div>
    </div>
  );
}

export default Onglet;
