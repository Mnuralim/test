import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBox = () => {
  const [show, setShow] = useState(false);

  const handleOn = () => {
    setShow(true);
  };

  return (
    <div>
      <BiSearchAlt2 onClick={handleOn} />
      {show && <input type="search" placeholder="search" />}
    </div>
  );
};

export default SearchBox;
