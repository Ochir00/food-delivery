import { AdminSidebar } from "@/components/Admin-sidebar";
import { ToggleGroupDemo } from "@/components/Category";

 const Header = () => {
    return (
        <div className="flex bg-[#E4E4E7]">
            <AdminSidebar />
            <div className="w-full ">
                <ToggleGroupDemo />
            </div>
        </div>
    )
}
export default Header;