import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full h-[44px] bg-[#18181B] flex justify-between items-center px-[88px] py-[28px]">
      <div className="flex">
        <Image
          className="w-[46px] h-[37px]"
          src={"headericon.svg"}
          width={1000}
          height={1000}
          alt="downloand"
        />
        <div>
          <p className="text-xl">
            <span className="text-white">Nom</span>
            <span className="text-red-500">Nom</span>
          </p>
          <p className="text-white">Swift delivery</p>
        </div>
      </div>

      <div className="flex gap-3">
        <Link href={"/Register"}>
        <button className="px-[12px] py-[8px] bg-white rounded-full text-black">
          Sing up
        </button>
        </Link>
        
        <button className="px-[12px] py-[8px] bg-red-500 rounded-full text-white">
          Log in
        </button>
      </div>
    </div>
  );
};
export const Footer = () => {
  return (
    <div className="w-full h-[755px] bg-[#18181B] ">
      <div className="w-full h-[92px] bg-red-500 flex justify-between items-center">
        <p className="font-semibold text-[30px]">Fresh fast delivered </p>
      </div>
      <div className="max-w-[80%] m-auto mt-[100px]">
        <div className="w-full flex justify-between mb-[100px]">
          <div className="flex flex-col  items-center">
            <Image
              className="w-[46px] h-[37px]"
              src={"headericon.svg"}
              width={1000}
              height={1000}
              alt="downloand"
            />
            <div>
              <p className="text-xl">
                <span className="text-white">Nom</span>
                <span className="text-red-500">Nom</span>
              </p>
              <p className="text-white">Swift delivery</p>
            </div>
          </div>
          <div>
            <p className="text-[#71717A] text-[16px] pb-2">NOMNOM </p>
            <p className="text-[16px] text-[#FAFAFA]">Home </p>
            <p className="text-[16px] text-[#FAFAFA]">Contact us</p>
            <p className="text-[16px] text-[#FAFAFA]">Delivery zone</p>
          </div>
          <div>
            <p className="text-[#71717A] text-[16px] pb-2">MENU </p>
            <p className="text-[16px] text-[#FAFAFA]">Appetizers </p>
            <p className="text-[16px] text-[#FAFAFA]">Salads</p>
            <p className="text-[16px] text-[#FAFAFA]">Pizzas</p>
            <p className="text-[16px] text-[#FAFAFA]">Lunch favorites</p>
            <p className="text-[16px] text-[#FAFAFA]">Main dishes</p>
          </div>
          <div>
            <p className="text-[#71717A] text-[16px] pb-2">...</p>
            <p className="text-[16px] text-[#FAFAFA]">Side dish </p>
            <p className="text-[16px] text-[#FAFAFA]">Brunch</p>
            <p className="text-[16px] text-[#FAFAFA]">Desserts</p>
            <p className="text-[16px] text-[#FAFAFA]">Beverages</p>
            <p className="text-[16px] text-[#FAFAFA]">Fish & Sea foods</p>
          </div>
          <div>
            <p className="text-[#71717A] text-[16px] pb-2">Follow us</p>
            {/* <Image src={"facebook.png"} width={1000} height={1000} alt="facebook"/>
            <Image src={"facebook.png"} width={1000} height={1000} alt="facebook"/> */}
          </div>
        </div>
        <div className="w-full flex gap-10 border-t-2 border-gray-500/40 py-10 text-gray-600">
              <p>Copy right 2025 © Nomnom LLC</p>
              <p>Privacy policy</p>
              <p>Terms and conditoin</p>
              <p>Cookie policy</p>
        </div>
      </div>
    </div>
  );
};
