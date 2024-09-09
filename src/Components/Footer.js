import TacoBell_Footer_Logo from "../Assets/Image/footer-logo.png";
import Arrow from "../Assets/Image/arrow-btm-purple.png";
import { Link as RouterLink } from "react-router-dom";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
export default function Footer() {
  return (
    <footer className="font-oswald w-full flex-col h-auto">
      <div className="w-full flex-1 flex sm:flex-row flex-col  text-gray-300 h-auto">
        {/* Left  */}
        <div className="flex-1 bg-black bg-opacity-95 py-6 md:py-12 items-center flex flex-col gap-5">
          <div
            className="flex-2"
            style={{
              backgroundImage: `url(${"https://res.cloudinary.com/dlycinwrl/image/upload/v1725882261/spritesheet_v8dpfo.png"})`,
              backgroundPosition: "-14.5px -1035px",
              width: "60px",
              height: "55px",
              backgroundSize: "85px",
            }}
          ></div>
          <div className="flex-1 w-full flex flex-col items-center ">
            <p className="text-base">SPECIAL OFFERS</p>
            <p className="text-[13px]">Don't miss out on exclusive offers.</p>
          </div>
          <div className="flex-1 mt-2 mb-5 w-full flex flex-row justify-center gap-6 items-center ">
            <p className="text-[14px]">SPECIAL OFFERS</p>
            <p className="w-6 h-6 flex p-1 items-center justify-center rounded-5xl bg-purple-300 mt-1 -rotate-90">
              <img src={Arrow} alt="" />
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="flex-1 py-6 md:py-12 bg-black bg-opacity-90 items-center flex flex-col gap-5">
          <div
            className="flex-2 "
            style={{
              backgroundImage: `url(${"https://res.cloudinary.com/dlycinwrl/image/upload/v1725882261/spritesheet_v8dpfo.png"})`,
              backgroundPosition: "-10px -1117px",
              width: "65px",
              height: "55px",
              backgroundSize: "85px",
            }}
          ></div>
          <div className="flex-1 w-full  flex flex-col items-center ">
            <p className="text-base">Find taco bell</p>
            <p className="text-[13px]">
              Find the nearest Taco Bell Restaurant in your city
            </p>
          </div>
          <div className="flex-1 mt-2 mb-5 w-full flex flex-row justify-center gap-6 items-center ">
            <p className="text-[14px]">Find Us</p>
            <p className="w-6 h-6 flex p-1 items-center justify-center rounded-5xl bg-purple-300 mt-1 -rotate-90">
              <img src={Arrow} alt="" />
            </p>
          </div>
        </div>
      </div>
      {/* lower  */}
      <div className=" bg-black text-white flex flex-col flex-2">
        <div className=" mt-6 md:mt-5  w-full  text-sm hidden md:flex items-center justify-center gap-4 flex-wrap">
          <p className=" hover:text-gray-500 cursor-pointer pl-3 text-[13px] relative before:content-['•'] before:absolute before:top-0  before:left-0 before:text-gray-600  uppercase">
            <RouterLink to={"/"}>Our food</RouterLink>
          </p>
          <p className=" hover:text-gray-500 cursor-pointer pl-3 text-[13px] relative before:content-['•'] before:absolute before:top-0  before:left-0 before:text-gray-600  uppercase">
            <RouterLink to={"/find-us"}>find us</RouterLink>
          </p>
          <p className=" hover:text-gray-500 cursor-pointer pl-3 text-[13px] relative before:content-['•'] before:absolute before:top-0  before:left-0 before:text-gray-600  uppercase">
            News
          </p>
          <p className=" hover:text-gray-500 cursor-pointer pl-3 text-[13px] relative before:content-['•'] before:absolute before:top-0  before:left-0 before:text-gray-600  uppercase">
            Work with us
          </p>
          <p className=" hover:text-gray-500 cursor-pointer pl-3 text-[13px] relative before:content-['•'] before:absolute before:top-0  before:left-0 before:text-gray-600  uppercase">
            what's new
          </p>
          <p className=" hover:text-gray-500 cursor-pointer pl-3 text-[13px] relative before:content-['•'] before:absolute before:top-0  before:left-0 before:text-gray-600  uppercase">
            offers
          </p>
          <p className=" hover:text-gray-500 cursor-pointer pl-3 text-[13px] relative before:content-['•'] before:absolute before:top-0  before:left-0 before:text-gray-600  uppercase">
            <RouterLink to={"/AboutUS"}>About us</RouterLink>
          </p>
          <p className=" hover:text-gray-500 cursor-pointer pl-3 text-[13px] relative before:content-['•'] before:absolute before:top-0  before:left-0 before:text-gray-600  uppercase">
            contact us
          </p>
          <p className=" hover:text-gray-500 cursor-pointer pl-3 text-[13px] relative before:content-['•'] before:absolute before:top-0  before:left-0 before:text-gray-600  uppercase">
            taco x poco contest
          </p>
          <p className=" hover:text-gray-500 cursor-pointer pl-3 text-[13px] relative before:content-['•'] before:absolute before:top-0  before:left-0 before:text-gray-600  uppercase">
            t&c
          </p>
        </div>

        <div className="p-5 md:hidden flex gap-6 flex-wrap text-sm md:text-base gap-y-8">
          <div className="flex flex-1 flex-col gap-2">
            <RouterLink to={"/"}>
              <p>Our food</p>
            </RouterLink>
            <RouterLink to={"/find-us"}>
              <p>find us</p>
            </RouterLink>
            <p>News</p>
            <p>Work with us</p>
            <p>what's new</p>
          </div>
          <div className="flex  flex-1 flex-col gap-2">
            <p>offers</p>
            <RouterLink to={"/AboutUs"}>
              <p>About us</p>
            </RouterLink>
            <p>contact us</p>
            <p className="text-[13px]">taco x poco contest</p>
            <p>t&c</p>
          </div>
        </div>

        <div className="md:p-12 flex mt-5 mb-7 md:mt-0 gap-5 flex-col sm:flex-row ">
          <div className=" flex flex-col gap-2 md:items-start items-center justify-center flex-1">
            <RouterLink to={"/"}>
              <img className="w-10" src={TacoBell_Footer_Logo} alt="" />
            </RouterLink>
            <p className="mt-3 text-[14.5px]">
              ©2019 Taco Bell IP Holder, LLC. All Rights
            </p>
            <p className="text-[14.5px]">Reserved.</p>
          </div>
          <div className="items-center md:justify-end justify-center gap-5 flex flex-1">
            <TiSocialFacebook
              className=" rounded-5xl border  bg-gray-500"
              size={30}
              color="black"
            />
            <TiSocialInstagram
              className=" rounded-5xl border  bg-gray-500"
              size={30}
              color="black"
            />
            <TiSocialTwitter
              className=" rounded-5xl border  bg-gray-500"
              size={30}
              color="black"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
