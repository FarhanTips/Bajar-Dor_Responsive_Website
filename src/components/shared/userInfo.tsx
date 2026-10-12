import Link from "next/link";

const UserInfo = () => {
    return (
            <div className='flex items-center justify-end gap-2'>
                <Link
                    href="/sign-in"
                    className="px-4 py-2 rounded-md border border-gray-300 hover:text-[#047F39] border-none"
                >
                    সাইন ইন
                </Link>
                <Link
                    href="/sign-up"
                    className="px-3.5 py-1.5 rounded-md bg-[#047F39] text-white active:scale-95 hover:bg-[#036b30]"
                >
                    সাইন আপ
                </Link>
            </div>
    );
};

export default UserInfo;