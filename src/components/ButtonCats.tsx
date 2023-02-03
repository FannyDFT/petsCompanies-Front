import React, { useState } from "react";

type Props = {};

function ButtonCats({}: Props) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleChangeClick = (id) => {
    setSelectedButton(id);
  };

  return (
    <>
      <button
        onClick={handleChangeClick}
        type="button"
        className={selectedButton === 2 ? "buttonRose" : "buttonBlack"}
      >
        Chats
      </button>
    </>
  );
}

export default ButtonCats;
