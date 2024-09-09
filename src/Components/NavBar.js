import { RxHamburgerMenu } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll"; // Link for scrolling within the page
import { Link as RouterLink } from "react-router-dom";
import nutritionalInfo from "../Assets/Documents/nutritional-info.pdf";
import { useLocation } from "react-router-dom";

export default function NavBar({ Open, setIsOpen, OpenMore, setOpenMore }) {
  const location = useLocation(); // Get the current location

  function CloseOnClickedLinks() {
    setIsOpen(!Open);
  }
  return (
    <nav className=" bg-black text-white  h-fit z-20 sticky top-0  lg:h-screen">
      {/* <CurrentRoute /> */}
      <div className="hidden  lg:flex gap-7 flex-col">
        <div className="px-9 mt-4 -mb-1">
          <RouterLink to={"/"}>
            <img
              src={
                "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882124/logo-new_ziufnf.png"
              }
              className="w-20"
              alt=""
            />
          </RouterLink>
        </div>
        <div className="font-oswald   text-[18px] font-medium uppercase flex justify-center w-full flex-col gap-1">
          <div className="hover:bg-opacity-100 cursor-pointer bg-custom-gray -rotate-12 -skew-x-12 py-3 text-center w-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gray-200 opacity-0 transform scale-x-0 group-hover:opacity-95 group-hover:scale-x-100 transition-all delay-10 duration-1000 ease-in-out origin-left"></div>
            <RouterLink to={"/"}>
              <p className="hover:text-purple-800 scale-x-110 scale-y-125">
                Order Now
              </p>
            </RouterLink>
          </div>
          <div className=" hover:bg-opacity-95 cursor-pointer bg-custom-gray -rotate-12 -skew-x-12 py-3 text-center w-full relative overflow-hidden group">
            <div className="absolute inset-0  bg-gray-200 opacity-0 transform scale-x-0 group-hover:opacity-95 group-hover:scale-x-100 transition-all delay-10 duration-1000 ease-in-out origin-left"></div>
            <p className="hover:text-purple-800 scale-x-110 scale-y-125">
              <ScrollLink to="our_menu_id" smooth={true} duration={500}>
                Our Food
              </ScrollLink>
            </p>
          </div>
          <div className="hover:bg-opacity-95 cursor-pointer bg-custom-gray -rotate-12 -skew-x-12 py-3 text-center w-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gray-200 opacity-0 transform scale-x-0 group-hover:opacity-95 group-hover:scale-x-100 transition-all delay-10 duration-1000 ease-in-out origin-left"></div>

            <p
              className={
                location.pathname !== "/find-us"
                  ? "hover:text-purple-800 scale-x-110 scale-y-125"
                  : "hover:text-purple-800 scale-x-110 scale-y-125 text-purple-800"
              }
            >
              <RouterLink to="/find-us">Find Us</RouterLink>
            </p>
          </div>

          <div className="hover:bg-opacity-95 cursor-pointer bg-custom-gray -rotate-12 -skew-x-12 py-3 text-center w-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gray-200 opacity-0 transform scale-x-0 group-hover:opacity-95 group-hover:scale-x-100 transition-all delay-10 duration-1000 ease-in-out origin-left"></div>
            <p className="hover:text-purple-800 scale-x-110 scale-y-125">
              <a
                href={nutritionalInfo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Nutrition
              </a>
            </p>
          </div>

          <div className="hover:bg-opacity-95 cursor-pointer bg-custom-gray -rotate-12 -skew-x-12 py-3 text-center w-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gray-200 opacity-0 transform scale-x-0 group-hover:opacity-95 group-hover:scale-x-100 transition-all delay-10 duration-1000 ease-in-out origin-left"></div>

            <p
              className={
                location.pathname !== "/AboutUs"
                  ? "hover:text-purple-800 relative z-10 scale-x-110 scale-y-125"
                  : "hover:text-purple-800 relative z-10 scale-x-110 scale-y-125 text-purple-800"
              }
            >
              <RouterLink to={"/AboutUs"}>About us</RouterLink>
            </p>
          </div>

          <div className="hover:bg-opacity-95 cursor-pointer bg-custom-gray -rotate-12 -skew-x-12 py-3 text-center w-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gray-200 opacity-0 transform scale-x-0 group-hover:opacity-95 group-hover:scale-x-100 transition-all delay-10 duration-1000 ease-in-out origin-left"></div>
            <p className="hover:text-purple-800 scale-x-110 scale-y-125">
              what's new
            </p>
          </div>
          <div className="hover:bg-opacity-95 cursor-pointer bg-custom-gray -rotate-12 -skew-x-12 py-3 text-center w-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gray-200 opacity-0 transform scale-x-0 group-hover:opacity-95 group-hover:scale-x-100 transition-all delay-10 duration-1000 ease-in-out origin-left"></div>
            <p
              onClick={() => setOpenMore(true)}
              className="hover:text-purple-800 scale-x-110 scale-y-125"
            >
              More +
            </p>
          </div>
        </div>
      </div>

      <div className="font-oswald realtive lg:hidden w-full  p-2">
        <div className="flex items-center justify-between w-full">
          <div>
            <RxHamburgerMenu onClick={CloseOnClickedLinks} size={25} />
          </div>
          <div>
            <RouterLink to={"/"}>
              <img
                src={
                  "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882124/logo-mobile_mh4oxw.png"
                }
                className="h-10"
                alt=""
              />
            </RouterLink>
          </div>
          <div>
            <RouterLink to={"/find-us"}>
              <FaLocationDot size={25} />
            </RouterLink>
          </div>
        </div>
        {Open ? (
          <div className=" fixed z-20 top-0 left-0 flex flex-col lg:hidden bg-black h-screen overflow-y-auto w-full">
            <div className="flex-1 p-2 uppercase items-center flex border-b-[1px] border-solid border-white justify-end">
              <MdOutlineCancel
                className=""
                onClick={CloseOnClickedLinks}
                size={32}
              />
            </div>
            <p className=" flex-1 p-3  uppercase items-center flex border-b-[1px] border-solid border-white justify-center ">
              <a onClick={CloseOnClickedLinks} href="#our_menu_id">
                Order Now
              </a>
            </p>
            <p
              onClick={CloseOnClickedLinks}
              className=" flex-1 p-3  uppercase items-center flex border-b-[1px] border-solid border-white justify-center "
            >
              <RouterLink to={"/"}>OUR FOOD</RouterLink>
            </p>
            <p
              onClick={CloseOnClickedLinks}
              className={
                location.pathname !== "/find-us"
                  ? "hover:text-purple-800 flex-1 p-3  uppercase items-center flex border-b-[1px] border-solid border-white justify-center "
                  : "hover:text-purple-800 flex-1 p-3  uppercase items-center flex border-b-[1px] border-solid border-white justify-center text-purple-800"
              }
            >
              <RouterLink to="/find-us">Find Us</RouterLink>
            </p>
            <p
              onClick={CloseOnClickedLinks}
              className=" flex-1 p-3  uppercase items-center flex border-b-[1px] border-solid border-white justify-center "
            >
              Nutrition
            </p>
            <p
              onClick={CloseOnClickedLinks}
              className={
                location.pathname !== "/AboutUs"
                  ? "hover:text-purple-800 flex-1 p-3  uppercase items-center flex border-b-[1px] border-solid border-white justify-center "
                  : "hover:text-purple-800 flex-1 p-3  uppercase items-center flex border-b-[1px] border-solid border-white justify-center text-purple-800"
              }
            >
              <RouterLink to={"/AboutUs"}>About us</RouterLink>
            </p>
            <p
              onClick={CloseOnClickedLinks}
              className=" flex-1 p-3  uppercase items-center flex border-b-[1px] border-solid border-white justify-center "
            >
              what's new
            </p>
            <p
              onClick={CloseOnClickedLinks}
              className=" flex-1 p-3  uppercase items-center flex border-b-[1px] border-solid border-white justify-center "
            >
              More +
            </p>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
