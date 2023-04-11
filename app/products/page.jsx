import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineArrowBack, MdShoppingBag } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

const products = () => {
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
              <div className="flex flex-row justify-center items-center gap-[4px] text-[15px] text-[#505050]">
                Brand
                <span>
                  <IoMdArrowDropdown className="text-2xl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default products;
