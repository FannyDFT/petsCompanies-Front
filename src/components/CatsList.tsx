import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import CatsCard from "./CatsCard";
import FormCats from "./FormCats";

function CatsList() {
  const [cats, setCats] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getAllCats = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/cats");
    setCats(data);
    console.log(cats);
  };

  useEffect(() => {
    getAllCats();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  return (
    <div>
      <div className="pt-40">
        <div className="flex justify-center  mb-14 mt-5">
          <input
            className="rounded-full p-1 font-indieFlower w-60 font-semibold"
            placeholder="Race recherchée..."
            value={searchValue}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="grid grid-cols-2 gap-y-10  ">
          {cats
            .filter((value) => value.race.toLowerCase().includes(searchValue))
            .map((cat) => (
              <CatsCard key={cats.id} cat={cat} />
            ))}
        </div>
      </div>
      <FormCats refresh={getAllCats} />
    </div>
  );
}

export default CatsList;
