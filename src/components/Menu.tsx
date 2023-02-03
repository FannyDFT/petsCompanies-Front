import Link from "next/link";
import React from "react";

type Props = {};

function Menu({}: Props) {
  return (
    <div className=" absolute top-40 left-0 w-72 rounded-md opacity-70 h-60 bg-slate-100">
      <div className="flex flex-col justify-center pl-4 space-y-3 font-indieFlower font-semibold text-3xl h-60 ">
        <div className="hover:">
          <Link href="/dogs"> - Chiens</Link>
        </div>
        <div>
          <Link href="/cats"> - Chats</Link>
        </div>
        <div>
          <Link href="/animals"> - Tous les animaux</Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
