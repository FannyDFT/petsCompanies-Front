import React, { useState } from "react";

type Props = {};

function ButtonDogs({}: Props) {
  const [isBlack, setIsBlack] = useState(true);

  const handleChangeColor = () => {
    setIsBlack(!isBlack);
  };
  return (
    <>
      {isBlack ? (
        <button
          onClick={handleChangeColor}
          type="button"
          className="buttonRose"
        >
          Chiens
        </button>
      ) : (
        <button
          onClick={handleChangeColor}
          type="button"
          className="buttonBlack"
        >
          Chiens
        </button>
      )}
    </>
  );
}

export default ButtonDogs;
