import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import Link from "next/link";

const getSingleProduct = async (id) => {
  const res = await fetch(`https://joyous-bat-ring.cyclic.app/api/product/get-single-product/${id}`, {
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
              <Link href={"/products"}>
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
              <h1 className="text-[20px] text-[#505050] font-bold">{product.data.title}</h1>
            </div>
            <div>
              <img src={product.data.thumbnail} alt="" className="w-[320px] h-[320px] rounded-[20px] filter shadow-md" />
            </div>
          </div>
        </div>
      </section>
      <section className="px-[25px] pt-[15px]">
        <div className="container">
          <h1 className="font-bold text-[20px] text-[#505050] ">Select Size</h1>
          <div className="pt-[5px] pb-[10px]">
            <span className="w-[50px] h-[30px] px-[9px] font-bold bg-[#D9D9D9]  text-center text-[20px] text-[#505050] inline-block mr-[15px] hover:bg-[#243B97] hover:text-white rounded-md">XS</span>
            <span className="w-[50px] h-[30px] px-[9px] font-bold bg-[#D9D9D9] text-center text-[20px] text-[#505050] inline-block mr-[15px] hover:bg-[#243B97] hover:text-white rounded-md">S</span>
            <span className="w-[50px] h-[30px] px-[9px] font-bold bg-[#D9D9D9] text-center text-[20px] text-[#505050] inline-block mr-[15px] hover:bg-[#243B97] hover:text-white rounded-md">M</span>
            <span className="w-[50px] h-[30px] px-[9px] font-bold bg-[#D9D9D9] text-center text-[20px] text-[#505050] inline-block mr-[15px] hover:bg-[#243B97] hover:text-white rounded-md">L</span>
            <span className="w-[50px] h-[30px] px-[9px] font-bold bg-[#D9D9D9] text-center text-[20px] text-[#505050] inline-block mr-[15px] hover:bg-[#243B97] hover:text-white rounded-md">XL</span>
          </div>
          <h1 className="font-bold text-[20px] text-[#505050] pb-[5px]">Select Color</h1>
          <div>
            <div className="w-[30px] h-[30px] px-[9px] font-bold bg-[#C2B3AF]   inline-block mr-[15px]   rounded-md"></div>
            <div className="w-[30px] h-[30px] px-[9px] font-bold bg-[#D6E0FF]  inline-block mr-[15px]   rounded-md"></div>
            <div className="w-[30px] h-[30px] px-[9px] font-bold bg-[#F5CDFF]  inline-block mr-[15px]   rounded-md"></div>
            <div className="w-[30px] h-[30px] px-[9px] font-bold bg-[#D4EEED]  inline-block mr-[15px]   rounded-md"></div>
          </div>
          <h1 className="font-bold text-[20px] text-[#505050] pt-[10px]">Detais</h1>
          <div className="w-full h-[153px] pt-[5px]">
            <p className="text-xs font-bold text-[#505050]">{product.data.description}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between px-[10px]  py-[5px]">
            <h2 className="text-[20px] font-bold text-[#FF0000]">{product.data.price}$</h2>
            <div>
              <Link href={"#"} className="bg-[#000000] rounded-md text-white py-2 px-[22px] text-[15px]">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-28"></div>
    </div>
  );
};

export default ProductDetail;
