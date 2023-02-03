import axios from "axios";
import React from "react";
import { Cat } from "../../src/types/globalTypes";
import Image from "next/image";
import Link from "next/link";

type Props = {
  cat: Cat;
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await axios.get(`http://localhost:5000/api/v1/cats/${id}`);
  const cat = res.data;

  return {
    props: {
      cat,
    },
  };
};
function DetailsCats({ cat }: Props) {
  const handleDelete = async (id: string) => {
    try {
      await axios
        .delete(`http://localhost:5000/api/v1/cats/${id}`)
        .then((res) => console.log("Deleted", res));
      window.location.href = "/cats";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen pt-36 overflow-y-scroll flex flex-col items-start">
      <div>
        <Image
          src={cat.imageURL}
          width={200}
          height={200}
          alt={cat.race}
          className="w-screen"
        />
      </div>
      <div className="flex flex-col mx-6 my-10 space-y-8 text-lg">
        <div className="flex justify-between font-indieFlower font-semibold text-primary text-3xl">
          {cat.name}
          <Image src="/assets/editer.png" width={40} height={20} alt="update" />
        </div>
        <div>
          <p className="font-patrickHand w-11/12 text-xl">{cat.description}</p>
        </div>

        <div className="flex flex-col space-y-6 w-auto">
          <div className="flex flex-row justify-between">
            <div className="">
              <Image
                src="/assets/peigne.png"
                width={30}
                height={30}
                alt="comb"
              />
            </div>
            <div className="font-patrickHand font-semibold ">Type de poils</div>
            <div className="font-patrickHand font-semibold">{cat.hairType}</div>
          </div>
          <hr className="border-solid border-1 border-blackColor" />
          <div className="flex flex-row justify-between">
            <div>
              <Image
                src="/assets/origin.png"
                width={30}
                height={30}
                alt="comb"
              />
            </div>
            <div className="font-patrickHand font-semibold">Origine</div>
            <div className="font-patrickHand font-semibold">{cat.origin}</div>
          </div>
          <hr className="border-solid border-1 border-blackColor" />
          <div className="flex flex-row justify-between">
            <div className="flex">
              <Image
                src="/assets/poids.png"
                width={30}
                height={30}
                alt="comb"
              />
              <Image src="/assets/size.png" width={30} height={30} alt="comb" />
            </div>
            <div className="font-patrickHand font-semibold">Gabarit</div>
            <div className="font-patrickHand font-semibold">
              {cat.behaviour}
            </div>
          </div>
          <hr className="border-solid border-1 border-blackColor" />
        </div>
        <div className="flex justify-end items-center">
          <p className="font-indieFlower font-semibold mr-4">Supprimer</p>
          <Link onClick={() => handleDelete(cat.id)} href="/dogs">
            <Image
              src="/assets/delete.png"
              width={40}
              height={20}
              alt="delete"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsCats;
