import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="gradasi h-screen overflow-hidden">
      <section className="pt-6">
        <div className="container flex justify-center ">
          <div className="px-[76px]">
            <img src="./img/logo.png" alt="" />
          </div>
        </div>
      </section>

      <section className="mt-[151px]">
        <div className="container mx-auto">
          <div className="px-[30px]">
            <form action="">
              <label htmlFor="email">
                <span className="text-[#243B97] text-[15px] font-bold">Email</span>
                <input
                  id="email"
                  type="email"
                  placeholder="Type here email"
                  className="py-[14px] px-[13px] block placeholder:text-[#EBEBEB] placeholder:text-[15px] bg-[#64B9FB] rounded-lg text-slate-50 focus:outline-none invalid:text-red-600 invalid:focus:ring-red-600 invalid:border-red-600 peer w-full mt-2 shadow"
                />
                <p className="mt-[2px] text-red-600 text-xs invisible peer-invalid:visible">Invalid email</p>
              </label>
              <label htmlFor="password">
                <span className="text-[#243B97] text-[15px] font-bold">Password</span>
                <input
                  id="password"
                  type="password"
                  placeholder="Type here password"
                  className="py-[14px] px-[13px] block placeholder:text-[#EBEBEB] placeholder:text-[15px] bg-[#64B9FB] rounded-lg text-slate-50 focus:outline-none  w-full mt-2 shadow"
                />
              </label>
            </form>
          </div>
          <div className="flex justify-end items-center relative pr-[20px] pt-[25px] ">
            <div className="absolute right-[46px] group  ">
              <Link className="text-[25px] font-extrabold group-hover:text-teal-400" href={"#"}>
                Lo
                <span className="text-white group-hover:text-teal-400">gin</span>
              </Link>
            </div>
            <div>
              <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_75_30)">
                  <circle cx="34" cy="34" r="32" fill="#243B97" />
                </g>
                <defs>
                  <filter id="filter0_d_75_30" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_75_30" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_75_30" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_75_30" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[270px]">
        <div className="container">
          <div className="flex flex-wrap justify-between px-[10px]">
            <div>
              <Link className="text-white font-bold text-base border-b" href={"/register"}>
                Register
              </Link>
            </div>
            <div>
              <Link className="text-white font-bold text-base border-b" href={"/forget-password"}>
                Forget Password
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
