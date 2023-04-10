import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <section className="pt-[18px] px-[11px]">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <img src="./img/logo.png" alt="logo" className="w-[126px] h-[38px]" />
            </div>
            <div>
              <BiSearchAlt2 className="w-[38px] h-[38px] text-[#ABABAB]" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[18px]">
        <div className="container">
          <div className="grid grid-cols-4 gap-[14px]">
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[74px] h-[74px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/young-man.png" alt="" />
                </Link>
              </div>
              <div>Man</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[74px] h-[74px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/young-man.png" alt="" />
                </Link>
              </div>
              <div>Man</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[74px] h-[74px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/young-man.png" alt="" />
                </Link>
              </div>
              <div>Man</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[74px] h-[74px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/young-man.png" alt="" />
                </Link>
              </div>
              <div>Man</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[74px] h-[74px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/young-man.png" alt="" />
                </Link>
              </div>
              <div>Man</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[74px] h-[74px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/young-man.png" alt="" />
                </Link>
              </div>
              <div>Man</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[74px] h-[74px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/young-man.png" alt="" />
                </Link>
              </div>
              <div>Man</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[74px] h-[74px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/young-man.png" alt="" />
                </Link>
              </div>
              <div>Man</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
