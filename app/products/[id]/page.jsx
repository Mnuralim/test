import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineArrowBack } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import Link from "next/link";

const getSingleProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
};

const ProductDetail = async ({ params }) => {
  const product = await getSingleProduct(params.id);

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
            <div>
              {/* <Input placeholder="Search" prefix={<BiSearchAlt2 />} suffix="Search" size="large" onChange={(e) => console.log(e.target.value)} /> */}
              <FcLike className="w-[38px] h-[38px] text-[#ABABAB]" />
            </div>
          </div>
        </div>
      </section>
      <section className="px-[20px] pt-[12px]">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <div className="pb-3">
              <h1 className="text-[20px] text-[#505050] font-bold">{product.title}</h1>
            </div>
            <div>
              <img src={product.thumbnail} alt="" className="w-[320px] h-[320px] rounded-[20px]" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Select Size</h1>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
