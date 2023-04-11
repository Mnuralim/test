import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineArrowBack, MdShoppingBag } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

const products = () => {
  const categories = [
    { label: "Elektronik", value: "electronics" },
    { label: "Pakaian", value: "clothing" },
    { label: "Makanan", value: "food" },
    { label: "Buku", value: "books" },
  ];
  return (
    <div>
      <section className="pt-[18px] px-[16px]">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <MdOutlineArrowBack className="w-[38px] h-[38px] text-[#505050]" />
            </div>
            <div className="text-[#505050] text-[20px] font-bold">Products</div>
            <div>
              {/* <Input placeholder="Search" prefix={<BiSearchAlt2 />} suffix="Search" size="large" onChange={(e) => console.log(e.target.value)} /> */}
              <BiSearchAlt2 className="w-[38px] h-[38px] text-[#ABABAB]" />
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
              <div className="flex flex-row  justify-self-center items-center gap-[4px] text-xs text-[#505050]">
                Mall
                <span>
                  <MdShoppingBag />
                </span>
              </div>
              <div className="flex flex-row justify-center items-center gap-[4px] text-xs text-[#505050]">
                Free Delivery
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
    </div>
  );
};

export default products;
