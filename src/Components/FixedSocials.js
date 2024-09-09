export default function FixedSocials() {
  return (
    <div className="fixed z-10 items-end hidden md:flex flex-col gap-3 top-32 right-0">
      <div className="p-1 shadow-sm shadow-white bg-white rounded">
        <img
          className="w-7 "
          src={
            "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882062/fb-sticky_btj2be.png"
          }
          alt=""
        />
      </div>
      <div className="p-1 shadow-sm shadow-white  bg-white rounded">
        <img
          className="w-7 "
          src={
            "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882122/insta-sticky_qkgcim.png"
          }
          alt=""
        />
      </div>
      <div className="p-1 shadow-sm shadow-white  bg-white rounded">
        <img
          className="w-7 "
          src={
            "https://res.cloudinary.com/dlycinwrl/image/upload/v1725882312/tw-sticky_u54kj1.png"
          }
          alt=""
        />
      </div>
      <div className="p-1 shadow-sm shadow-white  bg-white rounded">
        <img
          className="w-7 "
          src="https://res.cloudinary.com/dlycinwrl/image/upload/v1725882165/delivery-img_wrgqg0.png"
          alt=""
        />
      </div>
    </div>
  );
}
