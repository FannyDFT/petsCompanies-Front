import axios from "axios";
import React, { useEffect, useState } from "react";
import CatsCard from "./CatsCard";
import { Cat } from "./types/globalTypes";

export default function CatsList() {
  const [cats, setCats] = useState<Cat[]>([]);

  const getAllCats = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/cats");
    setCats(data);
    console.log(cats);
  };

  useEffect(() => {
    getAllCats();
  }, []);

  return (
    <div>
      {cats.map((cat) => (
        <CatsCard key={cat.id} cat={cat} />
      ))}
    </div>
  );
}
