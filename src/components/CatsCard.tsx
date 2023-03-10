import React from "react";
import Image from "next/image";
import { Cat } from "../types/globalTypes";
import Link from "next/link";

type Props = {
  cat: Cat;
};

function CatsCard({ cat }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={`/cats/${cat.id}`}>
        <Image
          src={cat.imageURL}
          width={150}
          height={200}
          alt={cat.race}
          className="rounded-lg border-0"
        />
      </Link>

      <p className="font-indieFlower text-white text-2xl ">{cat.race}</p>
    </div>
  );
}

export default CatsCard;
