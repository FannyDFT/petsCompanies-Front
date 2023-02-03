import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface IProps {
  refresh: () => void;
}

function FormDogs({ refresh }: IProps) {
  const [showFormulaire, setShowFormulaire] = useState(false);
  const [file, setFile] = useState<File | null>();
  const [addCard, setAddCard] = useState({
    name: "",
    type: "",
    race: "",
    description: "",
    hairType: "",
    origin: "",
    size: "",
    imageURL: "",
  });

  //Fonction pour montrer le formulaire ou non
  const handleShowFormulaire = () => {
    setShowFormulaire(!showFormulaire);
  };

  //Fonction qui permet de faire une requête POST à l'API avec les données
  //contenues dans addCard si celle ci réussi elle lance une autre fonction
  //handleImageUpload

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/dogs", addCard)
      .then((res) => {
        handleImageUpload(res.data.id);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  };

  //Fonction qui permet d'afficher l'image et les données
  const handleImageUpload = (dogId: string) => {
    const formData = new FormData();

    formData.append("image", file as File);
    console.log("file", file);
    axios
      .post(
        `http://localhost:5000/api/v1/dogs/${dogId}/upload/image`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .then(() => {
        refresh();
      });
  };

  //Fonction qui gère les modifications de données
  const handleAddCardChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddCard({
      ...addCard,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleShowFormulaire}
          className="flex justify-center"
        >
          <Image src="/assets/plus.png" width={80} height={80} alt="more" />
        </button>
      </div>
      <div className="flex justify-center w-screen mt-10">
        {showFormulaire && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 font-indieFlower text-primary font-semibold"
          >
            <input
              className="input"
              type="text"
              name="name"
              onChange={handleAddCardChange}
              placeholder="Nom"
            />
            <input
              className="input"
              type="text"
              name="type"
              onChange={handleAddCardChange}
              placeholder="Type"
            />
            <input
              className="input"
              type="text"
              name="race"
              onChange={handleAddCardChange}
              placeholder="Race"
            />

            <input
              className="input"
              type="text"
              name="description"
              onChange={handleAddCardChange}
              placeholder="description"
            />
            <input
              className="input"
              type="text"
              name="hairType"
              onChange={handleAddCardChange}
              placeholder="hairType"
            />
            <input
              className="input"
              type="text"
              name="origin"
              onChange={handleAddCardChange}
              placeholder="origin"
            />
            <input
              className="input"
              type="text"
              name="size"
              onChange={handleAddCardChange}
              placeholder="size"
            />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <div className="flex justify-center">
              <button type="submit" className="button">
                Ajouter
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default FormDogs;
