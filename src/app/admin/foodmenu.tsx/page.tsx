
import { AdminSidebar } from "@/components/Admin-sidebar";
import { Foodplus, ToggleGroupDemo } from "@/components/Category";
 const Header = () => {
    return (
        <div className="flex bg-[#E4E4E7]">
            <AdminSidebar />
            <div className="w-full ">
                <ToggleGroupDemo />
                <Foodplus />
            </div>
        </div>
    )
}
export default Header;