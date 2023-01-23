import React, { useState } from "react";

type Props = {};

function ButtonCats({}: Props) {
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
          Chats
        </button>
      ) : (
        <button
          onClick={handleChangeColor}
          type="button"
          className="buttonBlack"
        >
          Chats
        </button>
      )}
    </>
  );
}

export default ButtonCats;
