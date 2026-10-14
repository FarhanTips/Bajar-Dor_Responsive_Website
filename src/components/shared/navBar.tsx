
import Link from "next/link";
import UserInfo from "./userInfo";


const NavBar = () => {
    return (
        <div className="mx-auto my-3 flex w-11/13 items-center justify-between gap-3 sm:my-4">
            <Link href="/" className="flex min-w-0 items-center gap-1.5 sm:gap-2">

                <p className="shrink-0 rounded-lg bg-[#047F39] p-1.5 text-sm sm:rounded-xl sm:p-2 sm:text-xl">
                    🛒
                </p>

                <div className="min-w-0">
                    <p className="text-sm font-bold sm:text-xl">
                        বাজার দর
                    </p>

                    <p className="text-[8px] leading-relaxed text-gray-500 sm:text-xs">
                        {new Date().toLocaleDateString("bn-BD", {
                            dateStyle: "full",
                            calendar: "gregory",
                        })}
                    </p>
                </div>
            </Link>

            <div className="shrink-0">
                <UserInfo />
            </div>
        </div>
    );
};

export default NavBar;




