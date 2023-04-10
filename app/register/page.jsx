import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <div className="gradasi h-screen overflow-hidden">
      <section className="pt-6">
        <div className="container flex justify-center ">
          <div className="px-[76px]">
            <img src="./img/logo.png" alt="" />
          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container flex justify-center">
          <div className="flex relative ">
            <div>
              <img src="./img/profile.png" alt="profile" />
            </div>
            <div className="absolute top-14 -right-5">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M31.3418 22.1345V35.8435H3.91773V8.42543H13.7512C13.8492 7.03494 14.1822 5.72279 14.6915 4.50856H3.91773C1.76298 4.50856 0 6.27115 0 8.42543V35.8435C0 37.9978 1.76298 39.7604 3.91773 39.7604H31.3418C33.4966 39.7604 35.2595 37.9978 35.2595 35.8435V26.0513L31.3418 22.1345ZM28.4035 31.9267H6.85602L12.2429 25.0134L16.0823 29.6353L21.4691 22.7024L28.4035 31.9267ZM33.8883 14.0853C34.7502 12.7144 35.2595 11.1281 35.2595 9.40464C35.2595 4.52814 31.3222 0.591686 26.4447 0.591686C21.5671 0.591686 17.6298 4.52814 17.6298 9.40464C17.6298 14.2811 21.5671 18.2176 26.4251 18.2176C28.1489 18.2176 29.7551 17.7084 31.1068 16.8467L37.2184 22.957L40 20.176L33.8883 14.0853ZM26.4447 14.3007C23.7414 14.3007 21.5475 12.1073 21.5475 9.40464C21.5475 6.702 23.7414 4.50856 26.4447 4.50856C29.1479 4.50856 31.3418 6.702 31.3418 9.40464C31.3418 12.1073 29.1479 14.3007 26.4447 14.3007Z"
                  fill="#243B97"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[24px]">
        <div className="container mx-auto">
          <div className="px-[30px]">
            <form action="">
              <label htmlFor="full-name" className="block mb-[15px]">
                <span className="text-[#243B97] text-[15px] font-bold">Full Name</span>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Type here Full Name"
                  className="py-[14px] px-[13px] block placeholder:text-[#EBEBEB] placeholder:text-[15px] bg-[#64B9FB] rounded-lg text-slate-50 focus:outline-none  w-full mt-2 shadow"
                />
              </label>
              <label htmlFor="email">
                <span className="text-[#243B97] text-[15px] font-bold">Email</span>
                <input
                  id="email"
                  type="email"
                  placeholder="Type here Email"
                  className="py-[14px] px-[13px] block placeholder:text-[#EBEBEB] placeholder:text-[15px] bg-[#64B9FB] rounded-lg text-slate-50 focus:outline-none invalid:text-red-600 invalid:focus:ring-red-600 invalid:border-red-600 peer w-full mt-2 shadow"
                />
                <p class="mt-[2px] text-red-600 text-xs invisible peer-invalid:visible">Invalid email</p>
              </label>
              <label htmlFor="phone" className="block mb-[15px]">
                <span className="text-[#243B97] text-[15px] font-bold">Phone Number</span>
                <input
                  id="phone"
                  type="text"
                  placeholder="Type here Phone Number"
                  className="py-[14px] px-[13px] block placeholder:text-[#EBEBEB] placeholder:text-[15px] bg-[#64B9FB] rounded-lg text-slate-50 focus:outline-none  w-full mt-2 shadow"
                />
              </label>
              <label htmlFor="password" className="block mb-[15px]">
                <span className="text-[#243B97] text-[15px] font-bold">Password</span>
                <input
                  id="password"
                  type="password"
                  placeholder="Type here Password"
                  className="py-[14px] px-[13px] block placeholder:text-[#EBEBEB] placeholder:text-[15px] bg-[#64B9FB] rounded-lg text-slate-50 focus:outline-none  w-full mt-2 shadow"
                />
              </label>
              <label htmlFor="confPassword">
                <span className="text-[#243B97] text-[15px] font-bold">Confirm Password</span>
                <input
                  id="confPassword"
                  type="password"
                  placeholder="Type here Confirm Password"
                  className="py-[14px] px-[13px] block placeholder:text-[#EBEBEB] placeholder:text-[15px] bg-[#64B9FB] rounded-lg text-slate-50 focus:outline-none  w-full mt-2 shadow"
                />
              </label>
            </form>
          </div>
          <div className="flex justify-end items-center relative pr-[20px] pt-[25px] ">
            <div className="absolute right-[38px] group  ">
              <Link className="text-[25px] font-extrabold group-hover:text-teal-400" href={"#"}>
                Regi
                <span className="text-white group-hover:text-teal-400">ster</span>
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

      <section className="pt-[40px]">
        <div className="container">
          <div className="flex flex-wrap justify-between px-[10px]">
            <div>
              <Link className="text-white font-bold text-base border-b" href={"/login"}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
