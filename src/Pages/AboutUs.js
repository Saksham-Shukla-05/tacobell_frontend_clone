import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import FixedSocials from "../Components/FixedSocials";
import More from "../Components/More";

export default function AboutUs({ Open, setIsOpen, OpenMore, setOpenMore }) {
  return (
    <main className="font-oswald tracking-wider font-sans  flex-col lg:flex-row min-h-full w-full flex">
      <FixedSocials />
      <NavBar
        OpenMore={OpenMore}
        setOpenMore={setOpenMore}
        Open={Open}
        setIsOpen={setIsOpen}
      />
      {!OpenMore ? (
        <div className="h-full flex-1">
          <section className="h-full ">
            <div className="flex justify-center items-center  relative w-full h-72 md:h-[500px]">
              <img
                className="z-0 absolute object-cover h-full w-full "
                src={
                  "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882119/about-main-banner_quakfj.jpg"
                }
                alt=""
              />

              <div className=" bg-black h-full w-full justify-center bg-opacity-45 flex flex-col gap-8 items-center relative  ">
                <p className="font-bold text-white text-2xl lg:text-4xl">
                  The Taco Bell Journey
                </p>
              </div>
            </div>
          </section>
          <section className="flex gap-4  flex-col mb-12 py-4 md:py-8 px-2 md:px-10 h-full">
            <div>
              <p className="font-bold text-base md:text-2xl">Our History</p>
            </div>
            <div className="font-bold h-5 md:text-base text-sm  flex flex-wrap gap-3 ">
              <p className="h-fit cursor-pointer hover:border-b-[5px] border-purple-800">
                1962
              </p>
              <p className="h-fit cursor-pointer hover:border-b-[5px] border-purple-800">
                1970
              </p>
              <p className="h-fit cursor-pointer hover:border-b-[5px] border-purple-800">
                2010
              </p>
              <p className="h-fit cursor-pointer hover:border-b-[5px] border-purple-800">
                2015
              </p>
              <p className="h-fit cursor-pointer hover:border-b-[5px] border-purple-800">
                2019
              </p>
              <p className="h-fit cursor-pointer hover:border-b-[5px] border-purple-800">
                2022
              </p>
            </div>
          </section>
          <section className="relative flex ">
            <div className="p-5 flex-1 flex flex-col gap-32 border-r-[1px] border-black border-solid">
              <div className="flex flex-col gap-3 items-center">
                <div>
                  <img
                    className="h-full w-full rounded-lg"
                    src="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882069/1954_akplsf.jpg"
                    alt=""
                  />
                </div>
                <p className="text-justify md:text-center text-[12px] md:text-sm px-2">
                  Glen Bell was born on 3rd September 1923. After graduation he
                  served in the U.S. Marine Corps as a cook during the World
                  War-II. He started with the idea of selling crispy-shell tacos
                  from the window of his hamburger stand which really got
                  popular and became the foundation of Taco Bell.
                </p>
                <div className="w-fit  absolute bg-white h-fit md:h-56 flex items-end top-0 left-1/2 transform -translate-x-[45%] -translate-y-[100%] md:-translate-y-[50%]">
                  <p className="bg-black  text-sm text-white p-1 uppercase font-bold ">
                    TimeLine
                  </p>
                </div>
              </div>
              <div className="flex  mt-32 md:mt-40 flex-col gap-3 items-center">
                <div>
                  <img
                    className="h-full w-full md:w-96 aspect-video rounded-lg"
                    src={
                      "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882068/1970_a4lvyb.jpg"
                    }
                    alt=""
                  />
                </div>
                <p className="text-justify md:text-center text-[12px] md:text-sm px-2">
                  Taco Bell goes public with a total of 325 restaurants.
                </p>
                <div className="w-fit  absolute bg-white h-fit  flex items-end top-0 left-1/2 transform -translate-x-[45%] translate-y-[700px] md:translate-y-[680px]">
                  <p className="bg-black  text-sm text-white p-1 uppercase font-bold ">
                    1970
                  </p>
                </div>
              </div>
              <div className="flex  mt-72 md:mt-60 flex-col gap-3 items-center">
                <div>
                  <img
                    className="h-full w-full md:w-96 aspect-video rounded-lg"
                    src={
                      "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882258/2015_z1c9qc.png"
                    }
                    alt=""
                  />
                </div>
                <p className="text-justify md:text-center text-[12px] md:text-sm px-2">
                  Burman Hospitality becomes Taco Bells first franchisee in
                  India.
                </p>
                <div className="w-fit  absolute bg-white h-fit  flex items-end top-0 left-1/2 transform -translate-x-[45%] translate-y-[1250px] md:translate-y-[1300px]">
                  <p className="bg-black  text-sm text-white p-1 uppercase font-bold ">
                    2015
                  </p>
                </div>
              </div>
              <div className="flex  mt-32 md:mt-18 flex-col gap-3 items-center">
                <div>
                  <img
                    className="h-full w-full md:w-96 aspect-video rounded-lg"
                    src={
                      "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882079/2019_ldrq8a.jpg"
                    }
                    alt=""
                  />
                </div>
                <p className="text-justify md:text-center text-[12px] md:text-sm px-2">
                  Taco Bell names Burman Hospitality as master franchise partner
                </p>
                <div className="w-fit  absolute bg-white h-fit  flex items-end top-0 left-1/2 transform -translate-x-[45%] translate-y-[1700px] md:translate-y-[1750px]">
                  <p className="bg-black  text-sm text-white p-1 uppercase font-bold ">
                    2019
                  </p>
                </div>
              </div>
              <div className="flex  mt-28 md:mt-15 flex-col gap-3 items-center">
                <div>
                  <img
                    className="h-full w-full md:w-96 aspect-video rounded-lg"
                    src={
                      "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882114/2022_gr8sfi.jpg"
                    }
                    alt=""
                  />
                </div>
                <p className="text-justify md:text-center text-[12px] md:text-sm px-2">
                  Burman Hospitality launches 100th Taco Bell restaurant at M3M,
                  IFC, Sector-66, Gurugram.
                </p>
                <div className="w-fit  absolute bg-white h-fit  flex items-end top-0 left-1/2 transform -translate-x-[45%] translate-y-[2100px] md:translate-y-[2250px]">
                  <p className="bg-black  text-sm text-white p-1 uppercase font-bold ">
                    2022
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-col p-5 flex">
              <div className="mt-[400px] md:mt-96 flex flex-col gap-3 items-center">
                <div>
                  <img
                    className="h-full w-80 rounded-lg"
                    src={
                      "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882071/1962_emeqsf.jpg"
                    }
                    alt=""
                  />
                </div>
                <p className="text-justify md:text-center text-[12px] md:text-sm px-2">
                  Glen Bell opens his first Taco Bell restaurant in Downey, CA,
                  serving what his customers called "Tay-Kohs."
                </p>
                <div className="w-fit border absolute bg-white h-fit flex items-end top-0 left-1/2 transform -translate-x-[45%]  translate-y-[390px] md:translate-y-[400px]">
                  <p className="bg-black  text-sm text-white p-1 uppercase font-bold ">
                    1962
                  </p>
                </div>
              </div>
              <div className="mt-[280px] md:mt-96 flex flex-col gap-3 items-center">
                <div>
                  <img
                    className="h-full w-80 rounded-lg"
                    src={
                      "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882077/2010_ho1cnp.jpg"
                    }
                    alt=""
                  />
                </div>
                <p className="text-justify md:text-center text-[12px] md:text-sm px-2">
                  Taco Bell opens its first restaurant in India
                </p>
                <div className="w-fit border absolute bg-white h-fit flex items-end top-0 left-1/2 transform -translate-x-[45%]  translate-y-[900px] md:translate-y-[1030px]">
                  <p className="bg-black text-sm text-white p-1 uppercase font-bold ">
                    2010
                  </p>
                </div>
              </div>
              <div className="mt-80 md:mt-44 flex flex-col gap-3 items-center">
                <div>
                  <img
                    className="h-full w-80 rounded-lg"
                    src={
                      "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882101/20151_xkpokf.jpg"
                    }
                    alt=""
                  />
                </div>
                <p className="text-justify md:text-center text-[12px] md:text-sm px-2">
                  Burman Hospitality opens first Taco Bell restaurant in Delhi.
                </p>
                {/* <div className="w-fit border absolute bg-white h-fit flex items-end top-0 left-1/2 transform -translate-x-[45%]  translate-y-[1500px] md:translate-y-[1580px]">
                <p className="bg-black text-sm text-white p-1 uppercase font-bold ">
                  2010
                </p>
              </div> */}
              </div>
              <div className="mt-52 md:mt-44 flex flex-col gap-3 items-center">
                <div>
                  <img
                    className="h-full w-80 rounded-lg"
                    src={
                      "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882079/2019_ldrq8a.jpg"
                    }
                    alt=""
                  />
                </div>
                <p className="text-justify md:text-center text-[12px] md:text-sm px-2">
                  Burman Hospitality launches 50th Taco Bell restaurant at
                  Mantri Square Mall, Bangalore
                </p>
                {/* <div className="w-fit border absolute bg-white h-fit flex items-end top-0 left-1/2 transform -translate-x-[45%]  translate-y-[1500px] md:translate-y-[1580px]">
                <p className="bg-black text-sm text-white p-1 uppercase font-bold ">
                  2010
                </p>
              </div> */}
              </div>
            </div>
          </section>
          <section className="w-full mt-12 flex p-9 gap-4 flex-wrap  justify-between  ">
            <div className="flex flex-wrap gap-4 md:flex-row flex-col">
              <div className="flex-1 flex flex-col gap-4 items-center md:items-start ">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="h-full w-96"
                    src={
                      "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882299/tacobell-AboutUs-SpaceImg_sh99ag.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="md:text-base text-sm font-bold">
                  OUR RESTAURANTS
                </div>
                <div className="text-[12px] text-gray-500 text-center md:text-left">
                  Along with our open kitchen design and our California inspired
                  contemporary decor, you'll find a mix of seating areas, music
                  and lighting to make you feel at home.
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 items-center md:items-start ">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="h-full w-96"
                    src={
                      "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882406/tacobell-AboutUs-FoodImg_wp8she.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="md:text-base text-sm font-bold">OUR FOOD</div>
                <div className="text-[12px] text-gray-500 text-center md:text-left">
                  We pride ourselves on our craveable Mexican-Inspired menu,
                  along with our standards on food safety and product quality.
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-wrap md:flex-row flex-col items-end">
              <div className="flex-1 flex flex-col gap-4">
                <div className="rounded-lg overflow-hidden"></div>
                <div></div>
                <div className="text-center text-[12px]"></div>
              </div>
              <div className="flex-1 flex gap-4 md:items-start items-center flex-col ">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="h-full w-96"
                    src={
                      "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882181/our-people_gecouz.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="md:text-base text-sm font-bold">OUR FOOD</div>
                <div className="text-[12px] text-gray-500 text-center md:text-left">
                  We pride ourselves on our craveable Mexican-Inspired menu,
                  along with our standards on food safety and product quality.
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      ) : (
        <More OpenMore={OpenMore} setOpenMore={setOpenMore} />
      )}
    </main>
  );
}
