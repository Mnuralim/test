import React from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { BsFillPersonFill, BsPerson } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section>
        <div className="container fixed bottom-0 text-[#777777]">
          <div className="flex flex-wrap items-center justify-between bg-[#FCFBFC] px-[15px] pb-[17px] pt-[8px]">
            <div className="flex flex-col items-center justify-center">
              <Link href={"/dashboard"}>
                <FaHome className="w-[40px] h-[40px] text-[150px]" />
                Home
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaShoppingCart className="w-[40px] h-[40px] text-[150px]" />
              Cart
            </div>
            <div className="flex flex-col items-center justify-center">
              <GrMail className="w-[40px] h-[40px] text-[150px]" />
              Message
            </div>
            <div className="flex flex-col items-center justify-center">
              <FcLike className="w-[40px] h-[40px] text-[150px] fill-inherit" />
              Wishlist
            </div>
            <div className="flex flex-col items-center justify-center">
              <BsPerson className="w-[40px] h-[40px] text-[150px]" />
              Account
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
