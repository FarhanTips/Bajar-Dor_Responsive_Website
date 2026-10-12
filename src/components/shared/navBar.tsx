// import logo from "@/assets/logo-icon.png"
// import Image from "next/image";

import UserInfo from "./userInfo";


const NavBar = () => {
    return (
        <div className="w-11/13 mx-auto my-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                {/* <Image
                    src={logo}
                    alt="Nav Logo"
                    height={40}
                    width={40}
                    className="rounded-xl bg-[#047F39] p-2"
                /> */}
                <p className="rounded-xl bg-[#047F39] p-2 text-xl">🛒</p>

                <div>
                    <p className="font-bold text-xl">বাজার দর</p>

                    <p className="text-xs text-gray-500">
                        {new Date().toLocaleDateString("bn-BD", {
                            dateStyle: "full",
                            calendar: "gregory",
                        })}
                    </p>
                </div>
            </div>

            <UserInfo></UserInfo>
        </div>
    );
};

export default NavBar;