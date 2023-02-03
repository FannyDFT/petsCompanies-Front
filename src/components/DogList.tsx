import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import DogCard from "./DogCard";
import FormDogs from "./FormDogs";

function DogList() {
  const [dogs, setDogs] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  //Fetch des données des chiens de l'API
  const getAllDogs = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/dogs");
    setDogs(data);
    console.log(dogs);
  };

  useEffect(() => {
    getAllDogs();
  }, []);

  //Filtre de recherche par race
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  return (
    <div>
      <div className="pt-40">
        <div className="flex justify-center mb-14 mt-5">
          <input
            className="rounded-full p-1 font-indieFlower w-60 font-semibold"
            placeholder="Race recherchée..."
            value={searchValue}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="grid grid-cols-2 gap-y-10">
          {dogs
            .filter((value) => value.race.toLowerCase().includes(searchValue))
            .map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
        </div>
      </div>

      <FormDogs refresh={getAllDogs} />
    </div>
  );
}

export default DogList;
