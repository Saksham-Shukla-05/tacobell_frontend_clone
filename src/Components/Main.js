import { useState, useEffect } from "react";
import More from "./More";

import { LuLoader2 } from "react-icons/lu";
import { Element } from "react-scroll";
import { TiSocialInstagram } from "react-icons/ti";
import Footer from "./Footer";
import FixedSocials from "./FixedSocials";

export default function Main({ OpenMore, setOpenMore }) {
  const [Image, setImage] = useState(
    "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882399/Website_Homepage_Banner_2_soonwq.jpg"
  );
  const [fade, setFade] = useState(true);
  const images = [
    "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882399/Website_Homepage_Banner_2_soonwq.jpg",
    "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882142/cheesy-lava-taco_rdsl3q.jpg",
  ];

  let currentIndex = 0;

  const Sliding_Images = [
    {
      DesktopImg:
        "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882162/cp-desktop_tt7z85.jpg",
      MobileImg:
        "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882203/cp-mobile_bakzpk.jpg",
      heading: "Our Restaurant",
      text: " connaught place, delhi",
    },
    {
      DesktopImg:
        "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882119/home-restaurant-desktop-img1_fofyai.jpg",
      MobileImg:
        "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882119/home-restaurant-mobile-img1_gywsof.jpg",
      heading: "Our Restaurant",
      text: "cyber hub, gurugram",
    },
    {
      DesktopImg:
        "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882137/nehru-place-desktop_mhhvqt.jpg",
      MobileImg:
        "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882144/nehru-place-mobile_ivcimy.jpg",
      heading: "Our Restaurant",
      text: "nehru place, delhi",
    },
    {
      DesktopImg:
        "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882250/SJR-Koramangala-desktop_jgbhoe.jpg",
      MobileImg:
        "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882268/SJR-Koramangala-mobile_kwzzbg.jpg",
      heading: "Our Restaurant",
      text: "SJR-Koramangala, bangalore",
    },
    {
      DesktopImg:
        "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882199/Panjagutta-desktop_e8eulx.jpg",
      MobileImg:
        "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882353/Panjagutta-mobile_actgbz.jpg",
      heading: "Our Restaurant",
      text: "panjagutta, hyderbad",
    },
    {
      DesktopImg:
        "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882085/home-find-usnew-desktop_cwsr7u.jpg",
      MobileImg:
        "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882101/home-find-usnew-mobile_ea55rg.jpg",
      heading: "To Loca: Other Tac, Bell Restaurant in your city",
      text: "Click Here",
    },
  ];
  const [SlidingVal, setSlidingVal] = useState(0);

  function handleImageIncSlide() {
    if (SlidingVal !== Sliding_Images.length - 1)
      setSlidingVal((CurrentImage) => CurrentImage + 1);
    else setSlidingVal(0);
  }
  function handleImageDecSlide() {
    if (SlidingVal !== 0) setSlidingVal((CurrentImage) => CurrentImage - 1);
    else setSlidingVal(Sliding_Images.length - 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        setImage(images[currentIndex]);
        setFade(true);
      }, 250);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-full flex-1">
      {!OpenMore ? (
        <>
          <img
            className={`h-72 md:h-full hidden md:block md:aspect-video  w-full transition-opacity duration-200 ease-in ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center gap-12">
            <div className="w-full">
              <img
                className="h-72 aspect-square md:h-full block md:hidden  w-full"
                src={Image}
                alt=""
              />
            </div>
            <div className="md:hidden flex gap-2">
              <button
                onClick={() =>
                  setImage(
                    "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882399/Website_Homepage_Banner_2_soonwq.jpg"
                  )
                }
                className={`h-2 rounded border-solid border-2 border-purple-800 w-6 ${
                  Image ===
                  "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882399/Website_Homepage_Banner_2_soonwq.jpg"
                    ? "bg-purple-800"
                    : ""
                }`}
              ></button>
              <button
                onClick={() =>
                  setImage(
                    "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882142/cheesy-lava-taco_rdsl3q.jpg"
                  )
                }
                className={`h-2 rounded border-solid border-2 border-purple-800 w-6 ${
                  Image ===
                  "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882142/cheesy-lava-taco_rdsl3q.jpg"
                    ? "bg-purple-800"
                    : ""
                }`}
              ></button>
            </div>
          </div>
          <FixedSocials />
          <section className="w-full h-auto flex items-center flex-col">
            <Element name="our_menu_id">
              <div className="h-auto relative w-full  flex justify-center items-center text-purple-700">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="arc"
                    d="M 50 150 A 120 140 0 0 1 250 150"
                    fill="transparent"
                  />
                  <text fontSize="20" fill="purple">
                    <textPath href="#arc" startOffset="50%" textAnchor="middle">
                      OUR MENU
                    </textPath>
                  </text>
                </svg>
              </div>
            </Element>

            <p className="-mt-9 font-bold uppercase md:text-4xl text-xl text-center">
              The line-up
            </p>
          </section>
          <section className="mt-6 flex md:justify-between justify-between p-2 gap-2 md:gap-4 flex-wrap h-full w-full  md:p-5">
            <MenuItems
              BgImage="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882068/everyday_kxnqzn.jpg"
              Svg="https://res.cloudinary.com/dlycinwrl/image/upload/v1725885354/svgexport-3_swieod.png"
              text={"every day best value"}
            />
            <MenuItems
              BgImage="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882109/Best-of-Bell-n_d1iiut.jpg"
              Svg={
                "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885354/svgexport-4_zrlbyd.png"
              }
              text={"crave and save"}
            />
            <MenuItems
              BgImage="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882226/Shareables-new_dbjzse.jpg"
              Svg={
                "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885355/svgexport-10_njedbb.png"
              }
              text={"big saving combos"}
            />
            <MenuItems
              BgImage="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882381/Tacos-n_hzkrox.jpg"
              Svg={
                "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885354/svgexport-2_q0wewk.jpg"
              }
              text={"tacos and chalupa"}
            />
            <MenuItems
              BgImage="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882153/Burritos-n_foal3c.jpg"
              Svg={
                "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885354/svgexport-2_q0wewk.jpg"
              }
              text={"Burrito Rolls & Wraps"}
            />
            <MenuItems
              BgImage="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882249/rice-bowl_slwtpw.jpg"
              Svg={
                "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885354/svgexport-8_ntmdo5.png"
              }
              text={"rice bowls"}
            />
            <MenuItems
              BgImage="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882222/Quessadilla-n_tc5qtf.jpg"
              Svg={
                "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885354/svgexport-8_ntmdo5.png"
              }
              text={"Quessadilla"}
            />
            <MenuItems
              BgImage="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882256/Sides-n_axagrn.jpg"
              Svg={
                "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885354/svgexport-7_yawqpl.png"
              }
              text={"sides & dips"}
            />
            <MenuItems
              BgImage="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882068/Desserts-n_ajpys9.jpg"
              Svg={
                "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885354/svgexport-6_vqthuu.png"
              }
              text={"Deserts"}
            />
            <MenuItems
              BgImage="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882122/Beverages-n_hxta4g.jpg"
              Svg={
                "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885354/svgexport-5_ywx4mn.png"
              }
              text={"Beverages"}
            />
          </section>
          <section className="mt-6 w-full h-full">
            <SlidingImages
              SlidingVal={Sliding_Images[SlidingVal]}
              handleImageIncSlide={handleImageIncSlide}
              handleImageDecSlide={handleImageDecSlide}
            />
          </section>
          <section className=" flex flex-col items-center justify-center w-full h-full">
            <div className="bg-white flex  justify-center z-0 p-7 rounded-5xl  -mt-8  w-24 h-fit">
              <img
                src="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882150/news-icon_c3b5vy.png"
                className="w-9 md:w-12  h-fit"
                alt=""
              />
            </div>

            <div className="-mt-16">
              <svg xmlns="http://www.w3.org/2000/svg">
                <path
                  id="arc"
                  d="M 50 150 A 120 140 0 0 1 250 150"
                  fill="transparent"
                />
                <text fontSize="20" fill="purple">
                  <textPath href="#arc" startOffset="50%" textAnchor="middle">
                    OUR MENU
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="-mt-6 mb-6">
              <p className="text-2xl md:text-4xl font-bold ">Taco news</p>
            </div>
            <div className="p-3 md:p-3 xl:flex-row flex-col flex w-full h-auto">
              <div className="p-8 flex-1  flex flex-col items-center">
                <div className="bg-purple-600 rounded-3xl flex flex-col overflow-hidden">
                  <div className="bg-black w-full rounded-3xl overflow-hidden flex-0 h-[200px] md:h-[300px]">
                    <img
                      className="w-full h-full  object-contain"
                      src="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882141/News_1_Taco_bell_glwf8d.jpg"
                      alt=""
                    />
                  </div>

                  <div className="px-2 text-justify py-0 md:px-5 md:py-5">
                    <span className="text-white text-sm font-bold uppercase">
                      Oct 10, 2023
                    </span>
                    <div className="flex flex-col gap-4">
                      <p className="mt-2 text-sm md:text-xl text-white">
                        Taco Bell satisfies veggie lovers' cravings with Naked
                        Veggie Taco in new ad
                      </p>
                      <div className="flex mb-4 gap-3 items-center md:hidden">
                        <p className="text-sm  ">Read More</p>
                        <p className="w-4  h-4 p-1 flex items-center justify-center rounded-5xl bg-white mt-1 -rotate-90">
                          <img
                            src="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882102/arrow-btm-purple_mwyvkd.png"
                            alt=""
                          />
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <p className="mt-5 text-sm md:text-base text-white">
                        Taco Bell satisfies veggie lovers' cravings with Naked
                        Veggie Taco in new ad
                      </p>
                      <div className=" flex items-center gap-3 mt-8 text-sm mb-[20px] md:mb-[90px] text-white">
                        <p className="text-sm ">Read More</p>
                        <p className="w-9  h-9 flex items-center justify-center rounded-5xl bg-white mt-1 -rotate-90">
                          <img
                            src="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882102/arrow-btm-purple_mwyvkd.png"
                            alt=""
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-row flex-wrap  justify-evenly gap-5 ">
                <News
                  Image="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882132/Indian-Desi-Taco-Menu_Taco-_1_srk0fv.jpg"
                  Date={"Oct 10, 2023"}
                  text={
                    "Taco Bell India turns desi, delights consumers with an"
                  }
                />

                <News
                  Image="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882103/1200x628_XBox_Hardik_Event_Page_d7pxg7.jpg"
                  Date={"APR 04, 2023"}
                  text={
                    "Hardik Pandya named as first brand ambassador for Taco"
                  }
                />
                <News
                  Image="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882103/1200x628_XBox_Hardik_Event_Page_d7pxg7.jpg"
                  Date={"DEc 1, 2022"}
                  text={
                    "Taco Bell India Brings Three Layers Of Awesomeness With"
                  }
                />
                <News
                  Image="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882192/News_5_taco_bell_sefc2i.jpg"
                  Date={"Oct 21, 2022"}
                  text={
                    "Taco Bell India celebrates every six with cricket fans in"
                  }
                />
              </div>
            </div>
          </section>
          <section className="border-2 border-solid border-black flex flex-col items-center justify-center w-full h-auto">
            <div className="relative h-full w-full">
              <img
                src="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882132/bg-dine-in_n7ldaj.jpg"
                className="aspect-square md:aspect-video"
                alt=""
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl font-bold z-2 text-white uppercase">
                Order Now
              </p>
            </div>
          </section>
          <section className="p-5  mt-5  flex gap-6 flex-col items-center justify-center w-full h-auto">
            <TiSocialInstagram size={33} />
            <div className="w-full h-full flex justify-center mb-12">
              <img
                className="w-[40%] h-[40%] md:w-[15%] md:h-[100%]"
                src="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882061/tacobell-txt_wk0fzx.png"
                alt=""
              />
            </div>
            <div className="p-6 mb-12 overflow-x-auto w-full gap-12 md:gap-2 flex justify-between">
              <div>
                <LuLoader2 className="rotate-animatio" size={30} />
              </div>
              <div>
                <LuLoader2 className="rotate-animatio" size={30} />
              </div>
              <div>
                <LuLoader2 className="rotate-animatio" size={30} />
              </div>
              <div>
                <LuLoader2 className="rotate-animatio" size={30} />
              </div>
              <div>
                <LuLoader2 className="rotate-animatio" size={30} />
              </div>
              <div>
                <LuLoader2 className="rotate-animatio" size={30} />
              </div>
              <div>
                <LuLoader2 className="rotate-animatio" size={30} />
              </div>
            </div>
          </section>
          <Footer />
        </>
      ) : (
        <More OpenMore={OpenMore} setOpenMore={setOpenMore} />
      )}
    </main>
  );
}

function News({ Image, Date, text }) {
  return (
    <div className=" flex flex-col w-52 rounded-3xl overflow-hidden h-auto">
      <div className="rounded-3xl shadow-custom-black   overflow-hidden shadow-black flex-1 ">
        <img src={Image} className="h-full w-full" alt="" />
      </div>
      <div className="mt-5 p-2 flex-1 flex md:items-start items-center flex-col gap-3">
        <span className="uppercase text-sm">{Date}</span>
        <p className=" text-[14.5px] md:text-start text-center w-full ">
          {text} ...
        </p>
        <div className="flex gap-3  items-center ">
          <p className="text-[14px]">Read more</p>
          <p className="w-5 h-5 p-1.5 flex items-center justify-center rounded-5xl bg-purple-300 mt-1 -rotate-90">
            <img
              src="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882102/arrow-btm-purple_mwyvkd.png"
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuItems({ BgImage, Svg, text }) {
  return (
    <div className="cursor-pointer  rounded-2xl hover:scale-105 hover:shadow-3xl duration-500 hover:shadow-black transition-transfrom delay-50  ease-in   w-32 md:w-72 h-44 md:h-96 flex flex-col items-center justify-center  overflow-hidden text-center">
      <div
        className="rounded-xl md:rounded-3xl w-full h-[80%]  md:bg-cover  bg-contain bg-top"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      ></div>
      <div className="py-5  items-center flex justify-center gap-1 md:gap-5">
        <div className="flex-0">
          <img src={Svg} className="w-5 h-5 md:w-10 md:h-10 " alt="" />
        </div>
        <p className="flex-1  text-[8px] font-bold md:text-[15px] uppercase underline">
          {text}
        </p>
      </div>
    </div>
  );
}
function SlidingImages({
  SlidingVal,
  handleImageDecSlide,
  handleImageIncSlide,
}) {
  const { DesktopImg, MobileImg, heading, text } = SlidingVal;
  return (
    <div className="relative w-full h-full">
      <img
        className="hidden md:block w-full h-full aspect-video "
        src={DesktopImg}
        alt=""
      />
      <img
        className="block md:hidden w-full h-full aspect-square "
        src={MobileImg}
        alt=""
      />
      <div className="text-white flex flex-col gap-3  absolute bottom-20 md:bottom-32 p-4">
        <p className="text-[15px] md:text-xl">{heading}</p>
        <p className="text-[16px] md:text-3xl uppercase">{text}</p>
      </div>
      <div className="text-white absolute bottom-10 md:bottom-20 left-5 w-20 md:w-24 flex ">
        <button
          onClick={() => handleImageDecSlide()}
          className="w-[100%] h-8 md:h-12 border before:content-['<'] before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2 before:text-xl md:before:text-2xl "
        ></button>
        <button
          onClick={() => handleImageIncSlide()}
          className="w-[100%] h-8 md:h-12 border before:content-['>'] before:absolute before:left-15 before:top-1/2 before:-translate-y-1/2 before:text-xl md:before:text-2xl  "
        ></button>
      </div>
    </div>
  );
}
