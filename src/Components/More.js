import { MdOutlineCancel } from "react-icons/md";

export default function More({ OpenMore, setOpenMore }) {
  return (
    <div className="flex  h-screen  bg-black">
      <div className="z-10 cursor-pointer absolute right-2 top-16 lg:right-5  lg:top-8 text-white">
        <MdOutlineCancel
          onClick={() => setOpenMore(false)}
          className="size-5 md:size-8"
        />
      </div>
      <div className="relative bg-black flex-1 flex items-center justify-center hover:bg-purple-200">
        <img
          className="h-full w-full  "
          src={
            "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885667/t1_xnyrbo.jpg"
          }
          alt=""
        />
        <div className="absolute hover:bg-purple-600 hover:bg-opacity-45 cursor-pointer transition-bg duration-500 dealy-50 flex bg-black bg-opacity-50 uppercase font-oswald text-[12px] md:text-xl lg:text-2xl items-center  text-white justify-center  h-full w-full">
          Gallery
        </div>
      </div>
      <div className="relative flex-1 flex items-center justify-center hover:bg-purple-200">
        <img
          className="h-full w-full  "
          src={
            "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885708/t2_bdz2gp.jpg"
          }
          alt=""
        />
        <div className="absolute hover:bg-purple-600 hover:bg-opacity-45 cursor-pointer transition-bg duration-500 dealy-50 flex bg-black bg-opacity-50 uppercase font-oswald text-[12px] md:text-xl lg:text-2xl items-center  text-white justify-center  h-full w-full">
          news
        </div>
      </div>
      <div className="relative flex-1 flex items-center justify-center hover:bg-purple-200">
        <img
          className="h-full w-full  "
          src={
            "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885698/t3_fvh2vn.jpg"
          }
          alt=""
        />
        <div className="absolute hover:bg-purple-600 hover:bg-opacity-45 cursor-pointer transition-bg duration-500 dealy-50 flex bg-black bg-opacity-50 uppercase font-oswald text-[12px] md:text-xl lg:text-2xl items-center  text-white justify-center  h-full w-full">
          Contact us
        </div>
      </div>
      <div className="relative flex-1 flex items-center justify-center hover:bg-purple-200">
        <img
          className="h-full w-full  "
          src={
            "https://res.cloudinary.com/dlycinwrl/image/upload/v1725885718/t4_a0uuct.jpg"
          }
          alt=""
        />
        <div className="absolute hover:bg-purple-600 hover:bg-opacity-45 cursor-pointer transition-bg duration-500 dealy-50 flex bg-black bg-opacity-50 uppercase font-oswald text-[12px] md:text-xl lg:text-2xl items-center  text-white justify-center  h-full w-full">
          work with us
        </div>
      </div>
    </div>
  );
}
