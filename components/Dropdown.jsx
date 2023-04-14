import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [brand, setBrand] = useState("");

  // useEffect(() => {
  //   loadProductsData();
  // }, []);

  useEffect(() => {
    axios
      .get(`https://joyous-bat-ring.cyclic.app/api/product/get-all-products/?brand=${brand}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, [brand]);

  // const loadProductsData = async () => {
  //   return await axios
  //     .get("https://joyous-bat-ring.cyclic.app/api/product/get-all-products/")
  //     .then((response) => setData(response.data))
  //     .catch((err) => console.log(err));
  // };
  const handleSelectChange = (event) => {
    setBrand(event.target.value);
  };
  console.log(brand);

  return (
    <div>
      <form action="">
        <select name="brand" id="brand" value={brand} onChange={handleSelectChange}>
          <option value="">Brand</option>
          <option value="samsung">Samsung</option>
          <option value="apple">Apple</option>
          {/* {data.map((product) => (
            <option key={product._id} value={product.brand}>
              {product.brand}
            </option>
          ))} */}
        </select>
      </form>
    </div>
  );
};

export default Dropdown;
