import React, { useState } from "react";

type Props = {};

function ButtonDogs({}: Props) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleChangeClick = (id) => {
    setSelectedButton(id);
  };
  return (
    <>
      <button
        onClick={() => handleChangeClick(1)}
        type="button"
        className={selectedButton === 1 ? "buttonRose" : "buttonBlack"}
      >
        Chiens
      </button>
    </>
  );
}

export default ButtonDogs;
