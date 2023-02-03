import React from "react";
import Image from "next/image";
import { Dog } from "../types/globalTypes";
import Link from "next/link";

type Props = {
  dog: Dog;
};

function DogCard({ dog }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={`/dogs/${dog.id}`}>
        <Image
          src={dog.imageURL}
          width={150}
          height={180}
          alt={dog.race}
          className="rounded-lg border-0"
        />
      </Link>

      <p className="font-indieFlower text-white text-2xl ">{dog.race}</p>
    </div>
  );
}

export default DogCard;
