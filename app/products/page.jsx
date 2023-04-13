"use client";
import React from "react";
import { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineArrowBack, MdShoppingBag } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const Products = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    loadProductsData();
  }, []);

  const loadProductsData = async () => {
    return await axios
      .get("https://joyous-bat-ring.cyclic.app/api/product/get-all-products/")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`https://joyous-bat-ring.cyclic.app/api/product/get-all-products/?brand=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(err));
  };

  const categories = [
    { label: "samsung", value: "samsung" },
    { label: "asus", value: "asus" },
    { label: "Makanan", value: "food" },
    { label: "Buku", value: "books" },
  ];

  return (
    <div>
      <section className="pt-[18px] px-[16px]">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <Link href={"/dashboard"}>
                <MdOutlineArrowBack className="w-[38px] h-[38px] text-[#505050]" />
              </Link>
            </div>
            {/* <div className="text-[#505050] text-[20px] font-bold">Products</div> */}
            <div>
              {/* <Input placeholder="Search" prefix={<BiSearchAlt2 />} suffix="Search" size="large" onChange={(e) => console.log(e.target.value)} /> */}
              <form action="" onSubmit={handleSearch}>
                <label htmlFor="">
                  <input type="text" placeholder="search" value={value} onChange={(e) => setValue(e.target.value)} />
                  {/* <BiSearchAlt2 className="w-[38px] h-[38px] text-[#ABABAB]" /> */}
                </label>
                <button type="submit" className="pl-1">
                  Cari
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[20px] pt-[21px]">
        <div className="container ">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-row justify-center items-center gap-[4px] text-xs text-[#243B97]">
                All
                <span>
                  <img src="./img/icon 1.png" alt="" />
                </span>
              </div>
              <div className="flex flex-row  justify-self-center items-center gap-[4px] text-xs text-[#505050] ">
                <div className="text-center">Mall</div>
                <div>
                  <span>
                    <MdShoppingBag />
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-[4px] text-xs text-[#505050]">
                Free
                <span>
                  <TbTruckDelivery />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-row justify-center items-center gap-[4px] -ml-2 text-[15px] text-[#505050]">
                <select className=" bg-transparent">
                  <option value="">Brand</option>
                  {categories.map((category) => (
                    <option className="w-6 bg-transparent" key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-row justify-center items-center gap-[2px] text-[15px] text-[#505050]">
                <select className=" bg-transparent">
                  <option value="">Sub Category</option>
                  {categories.map((category) => (
                    <option className="w-6 bg-transparent" key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-row justify-center items-center gap-[4px] text-[15px] text-[#505050]">
                <select disabled className=" bg-transparent">
                  <option value="">Location</option>
                  {categories.map((category) => (
                    <option disabled className="w-6 bg-transparent" key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[19px] ">
        <div className="container ">
          <div className="flex flex-wrap justify-between bg-[#D9D9D9] py-[4px] px-[10px] gap-[10px] items-center">
            <div>
              <Image width={60} height={60} src="/img/asset5/image 20.png" alt="" />
            </div>
            <div>
              <Image width={60} height={60} src="/img/asset5/image 19.png" alt="" />
            </div>
            <div>
              <Image width={60} height={60} src="/img/asset5/image 18.png" alt="" />
            </div>
            <div>
              <Image width={60} height={60} src="/img/asset5/image 17.png" alt="" />
            </div>
            <div>
              <Image width={60} height={60} src="/img/asset5/image 16.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[10px] px-[11px] mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-[10px] justify-between">
            {data.map((product) => (
              <Link key={product._id} href={`/products/${product._id}`}>
                <div>
                  <div className="shadow-xl border border-solid border-[#505050] w-[190px] rounded-lg h-[231px]">
                    <div>
                      <Image src={product.thumbnail} width={231} height={170} alt="" className="rounded-lg w-full h-[170px]" />
                    </div>

                    <div className="px-[4px]">
                      <div>
                        <h2 className="text-[#505050] text-xs font-bold">{product.title}</h2>
                      </div>
                      <div className="flex flex-wrap justify-between px-[10px] text-xs text-[#FF0000] py-[5px]">
                        <p>{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                        <p className="text-[#505050]">{product.quantity} pcs</p>
                      </div>
                      <div>
                        <svg width="58" height="10" viewBox="0 0 58 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 0L6.07151 2.41314L8.53553 1.46447L7.58686 3.92849L10 5L7.58686 6.07151L8.53553 8.53553L6.07151 7.58686L5 10L3.92849 7.58686L1.46447 8.53553L2.41314 6.07151L0 5L2.41314 3.92849L1.46447 1.46447L3.92849 2.41314L5 0Z"
                            fill="#FF0000"
                          />
                          <path
                            d="M17 0L18.0715 2.41314L20.5355 1.46447L19.5869 3.92849L22 5L19.5869 6.07151L20.5355 8.53553L18.0715 7.58686L17 10L15.9285 7.58686L13.4645 8.53553L14.4131 6.07151L12 5L14.4131 3.92849L13.4645 1.46447L15.9285 2.41314L17 0Z"
                            fill="#FF0000"
                          />
                          <path
                            d="M29 0L30.0715 2.41314L32.5355 1.46447L31.5869 3.92849L34 5L31.5869 6.07151L32.5355 8.53553L30.0715 7.58686L29 10L27.9285 7.58686L25.4645 8.53553L26.4131 6.07151L24 5L26.4131 3.92849L25.4645 1.46447L27.9285 2.41314L29 0Z"
                            fill="#FF0000"
                          />
                          <path
                            d="M41 0L42.0715 2.41314L44.5355 1.46447L43.5869 3.92849L46 5L43.5869 6.07151L44.5355 8.53553L42.0715 7.58686L41 10L39.9285 7.58686L37.4645 8.53553L38.4131 6.07151L36 5L38.4131 3.92849L37.4645 1.46447L39.9285 2.41314L41 0Z"
                            fill="#777777"
                          />
                          <path
                            d="M53 0L54.0715 2.41314L56.5355 1.46447L55.5869 3.92849L58 5L55.5869 6.07151L56.5355 8.53553L54.0715 7.58686L53 10L51.9285 7.58686L49.4645 8.53553L50.4131 6.07151L48 5L50.4131 3.92849L49.4645 1.46447L51.9285 2.41314L53 0Z"
                            fill="#777777"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="mb-28"></div>
    </div>
  );
};

export default Products;
