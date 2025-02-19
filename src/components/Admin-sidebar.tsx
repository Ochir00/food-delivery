import Image from "next/image";

export const AdminSidebar = () => {
  return (
    <div className="sticky h-[100vh] w-[205px] bg-white p-[20px] pb-[50px]">
      <div className="flex items-center">
        <Image
          className="w-[46px] h-[37px]"
          src={"headericon.svg"}
          width={1000}
          height={1000}
          alt="downloand"
        />
        <div>
          <p className="text-xl">
            <span>Nom</span>
            <span className="text-red-500">Nom</span>
          </p>
          <p>Swift delivery</p>
        </div>
      </div>
      <div className="w-full mt-[20px]">
        <div className="flex items-center">
            <Image className="w-6 h-6 mr-5" src={"adminMenu.svg"} width={1000} height={1000} alt="Menu"/>
            <p>Food menu</p>
        </div>
        <div className="flex items-center">
            <Image className="w-6 h-6 mr-5" src={"adminOrder.svg"} width={1000} height={1000} alt="Orders"/>
            <p>Order</p>
        </div>
        <div className="flex items-center">
            <Image className="w-6 h-6 mr-5" src={"adminSettings.svg"} width={1000} height={1000} alt="Settings"/>
            <p>Settings</p>
        </div>
      </div>
    </div>
  );
};
