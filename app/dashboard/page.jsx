import { BiSearchAlt2 } from "react-icons/bi";
import Link from "next/link";

const getAllProducts = async () => {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });
  return res.json();
};

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div>
      <section className="pt-[18px] px-[11px]">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <img src="./img/logo.png" alt="logo" className="w-[126px] h-[38px]" />
            </div>
            <div>
              {/* <Input placeholder="Search" prefix={<BiSearchAlt2 />} suffix="Search" size="large" onChange={(e) => console.log(e.target.value)} /> */}
              <BiSearchAlt2 className="w-[38px] h-[38px] text-[#ABABAB]" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[18px] px-[11px]">
        <div className="container">
          <div className="grid grid-cols-4 gap-[14px]">
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[85px] h-[85px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset1/young-man.png" alt="" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Man</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[85px] h-[85px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset1/woman.png" alt="" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Women</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[85px] h-[85px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset1/shop 1.png" alt="" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Shop</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[85px] h-[85px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset1/shopping-bag 1.png" alt="" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Groceries</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[85px] h-[85px] rounded-full flex">
                <Link href={"/products"} className="m-auto ">
                  <img src="./img/asset1/gadgets 1.png" alt="" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Electronics</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[85px] h-[85px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset1/furniture 1.png" alt="" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Furniture</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[85px] h-[85px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset1/presents 1.png" alt="" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Gifts & Toys</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-[#A1A0CB] w-[85px] h-[85px] rounded-full flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset1/other 1.png" alt="" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">See All</div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[18px] px-[11px]">
        <div className="container">
          <div className="mb-[9px]">
            <p className="text-[#505050] text-xs">Popular Products</p>
          </div>
          <div className="grid grid-cols-4 gap-[10px]">
            <div className="flex flex-col items-center ">
              <div className=" flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset2/image 9.png" alt="" className="w-[85px] h-[85px] rounded-md shadow-md " />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Jas Oversized</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className=" flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset2/image 8 (1).png" alt="" className="w-[85px] h-[85px] rounded-md shadow-md" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Jas Oversized</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className=" flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset2/image 7.png" alt="" className="w-[85px] h-[85px] rounded-md shadow-md" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Jas Oversized</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className=" flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset2/image 6.png" alt="" className="w-[85px] h-[85px] rounded-md shadow-md" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Yellow Blazer</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className=" flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset2/image 9 (1).png" alt="" className="w-[85px] h-[85px] rounded-md shadow-md" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Jas Oversized</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className=" flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset2/image 8.png" alt="" className="w-[85px] h-[85px] rounded-md shadow-md" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Jas Oversized</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className=" flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset2/image 7 (1).png" alt="" className="w-[85px] h-[85px] rounded-md shadow-md" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Jas Oversized</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className=" flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset2/image 6 (1).png" alt="" className="w-[85px] h-[85px] rounded-md shadow-md" />
                </Link>
              </div>
              <div className="text-xs font-bold text-[#505050] pt-[5px]">Yellow Blazer</div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[18px] px-[11px]">
        <div className="container">
          <div className="mb-[9px] flex justify-between">
            <div className="text-[#505050] text-xs">Flash Sale</div>
            <div className="text-xs font-bold text-[#505050]">Up To: 9 Jun</div>
          </div>
          <div className="grid grid-cols-3 gap-[13px]">
            <div className="flex flex-col  ">
              <div className=" flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset3/image 7 (2).png" alt="" className="w-[114px] h-[114px] rounded-md shadow-md" />
                </Link>
              </div>
              <div className="bg-[#243B97] h-[10px] w-[107px] rounded-[10px] mt-[3px] ">
                <div className="bg-[#FF0000] h-[10px] w-[70px] rounded-[10px] text-[8px] font-bold text-[#FFFFFF] pl-1 flex items-center">Sold out: 895</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[10px] font-bold text-[#505050] pt-[3px]">Suit Outfit</div>
                <div className="text-[#FF0000] font-bold text-[10px]">200$</div>
              </div>
            </div>
            <div className="flex flex-col  ">
              <div className=" flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset3/image 10.png" alt="" className="w-1104px] h-[114px] rounded-md" />
                </Link>
              </div>
              <div className="bg-[#243B97] h-[10px] w-[107px] rounded-[10px] mt-[3px] ">
                <div className="bg-[#FF0000] h-[10px] w-[70px] rounded-[10px] text-[8px] font-bold text-[#FFFFFF] pl-1 flex items-center">Sold out: 895</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[10px] font-bold text-[#505050] pt-[3px]">Suit Outfit</div>
                <div className="text-[#FF0000] font-bold text-[10px]">200$</div>
              </div>
            </div>
            <div className="flex flex-col  ">
              <div className=" flex">
                <Link href={"#"} className="m-auto ">
                  <img src="./img/asset3/image 7 (3).png" alt="" className="w-[114px] h-[114px] rounded-md shadow-md" />
                </Link>
              </div>
              <div className="bg-[#243B97] h-[10px] w-[107px] rounded-[10px] mt-[3px] ">
                <div className="bg-[#FF0000] h-[10px] w-[70px] rounded-[10px] text-[8px] font-bold text-[#FFFFFF] pl-1 flex items-center">Sold out: 895</div>
              </div>
              <div className="flex justify-between gap-0 items-center">
                <div className="text-[10px] font-bold text-[#505050] pt-[3px]">Suit Outfit</div>
                <div className="text-[#FF0000] font-bold text-[10px]">200$</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[15px] px-[11px] mx-auto">
        <div className="container mx-auto">
          <div className="flex justify-center pb-3">
            <h1 className="text-xl text-[#505050]">Just for you!</h1>
          </div>
          <div className="flex flex-wrap gap-[10px] justify-between">
            {products.products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div>
                  <div className="shadow-xl border border-solid border-[#505050] w-[190px] rounded-lg h-[231px]">
                    <div>
                      <img src={product.thumbnail} alt="" className="rounded-lg w-full h-[170px]" />
                    </div>

                    <div className="px-[4px]">
                      <div>
                        <h2 className="text-[#505050] text-xs font-bold">{product.title}</h2>
                      </div>
                      <div className="flex flex-wrap justify-between px-[10px] text-xs text-[#FF0000] py-[5px]">
                        <p>{product.price}$</p>
                        <p>
                          <del className="text-[#505050]">2000$</del>
                        </p>
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
}
