import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { BiSearch } from "react-icons/bi";
import { FaClock, FaPhone } from "react-icons/fa6";
import { GrDirections } from "react-icons/gr";
import FixedSocials from "../Components/FixedSocials";
import More from "../Components/More";

export default function FindUs({ Open, setIsOpen, OpenMore, setOpenMore }) {
  return (
    <div className="font-oswald  tracking-wider font-sans  flex-col lg:flex-row min-h-full w-full flex">
      <NavBar
        Open={Open}
        setIsOpen={setIsOpen}
        OpenMore={OpenMore}
        setOpenMore={setOpenMore}
      />
      <FixedSocials />
      {!OpenMore ? (
        <main className=" h-full  flex-1">
          <div className="flex  justify-center items-center  relative w-full h-96">
            <img
              className="z-0 hidden md:block absolute  h-full w-full "
              src={
                "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882311/tacobell-FindUs-Banner_ssdeug.jpg"
              }
              alt=""
            />
            <img
              className="z-0 md:hidden block absolute  h-full w-full "
              src={
                "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882307/tacobell-FindUs-Banner-Mob_e9vuyu.jpg"
              }
              alt=""
            />
            <div className="md:mt-0 mt-12 flex flex-col gap-8 items-center relative  ">
              <p className="text-white text-lg md:text-2xl lg:text-4xl">
                FIND TACO BELL NEAR YOU
              </p>
              <div className="bg-none  min-w-[85%] gap-5 md:gap-0 md:bg-white flex md:flex-row flex-col border-none md:border rounded-none md:rounded-2xl overflow-hidden">
                <select
                  className="md:w-44 w-full outline-none rounded-3xl  p-1 md:p-3 "
                  name=""
                  id=""
                >
                  <option value="State">State</option>
                </select>

                <select
                  className="border-l-[1px] md:w-44 w-full outline-none md:rounded-none rounded-3xl  p-1 md:p-3 "
                  name=""
                  id=""
                >
                  <option value="City">City</option>
                </select>
                <select
                  className="border-l-[1px] md:w-44 w-full outline-none md:rounded-none rounded-3xl  p-1 md:p-3 "
                  name=""
                  id=""
                >
                  <option value="Locality">Locality</option>
                </select>
                <div className="border-white border-2 w-44 border-solid font-bold self-center items-center   flex  gap-2 text-white p-2 md:p-3 px-10 bg-purple-800  mx-1 rounded-2xl md:rounded-3xl">
                  <BiSearch size={22} className="h-full " />
                  <button className="flex-1 text-sm md:text-[15px] -mt-0">
                    Submit
                  </button>
                </div>
              </div>
              <p className="text-white uppercase text-center text-[14px] md:text-sm">
                Click here to check our safety and hygiene standards
              </p>
            </div>
          </div>

          <section className="mb-12 p-10 w-full h-full">
            <div className="">
              <p className="uppercase text-center md:text-start font-bold text-lg md:text-2xl">
                Restaurants Open For Dine-in, Delivery and Takeaway
              </p>
            </div>
            <div
              id="custome-scroll-rest-dets"
              className="h-[550px]  justify-center  md:justify-between overflow-y-scroll mt-5 flex-wrap   flex w-full border  gap-10 md:gap-12"
            >
              <Locations />
              <Locations />
              <Locations />
              <Locations />
              <Locations />
              <Locations />
              <Locations />
              <Locations />
              <Locations />
              <Locations />
            </div>
          </section>
          <Footer />
        </main>
      ) : (
        <More OpenMore={OpenMore} setOpenMore={setOpenMore} />
      )}
    </div>
  );
}

function Locations() {
  return (
    <div className="rounded-lg overflow-hidden   md:w-72  flex flex-col">
      <div className="">
        <img
          className="h-64 w-full"
          src={
            "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882307/tacobell-FindUs-Banner-Mob_e9vuyu.jpg"
          }
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3 mt-2">
        <p>Ambience Mall, Vasant Kunj</p>
        <div className="mt-2 flex items-center gap-2">
          <FaClock size={12} className="text-purple-700" />
          <p className="text-[13px] font-bold">Timing : 11 am - 11 pm</p>
        </div>
        <p className="text-[12px] text-gray-500 font-bold">
          Address: Space No. 8 (T-316 A) on Third Floor, at Ambience Mall,
          Vasant Kunj, New Delhi, Delhi
        </p>
      </div>
      <div className="mt-5 gap-3 w-full flex flex-col  ">
        <div className="gap-2 flex justify-around">
          <div className="flex flex-1 items-center justify-center rounded-[10px] border-[1px] border-purple-500">
            <FaPhone className="text-purple-700" />
            <div>
              <button className="p-2 0 text-sm text-purple-700 font-bold flex-1">
                Call Now
              </button>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-[10px] border-[1px] border-purple-500">
            <GrDirections className="text-purple-700" />
            <div>
              <button className="p-2 0 text-sm text-purple-700 font-bold flex-1">
                Get Direction
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 rounded-[10px] bg-purple-700  text-sm text-white font-bold text-center">
          <button className="">Restaurant Details</button>
        </div>
      </div>
    </div>
  );
}
