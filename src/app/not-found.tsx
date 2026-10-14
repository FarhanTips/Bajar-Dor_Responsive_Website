
import Link from "next/link";

const GlobalNotFound = () => {
    return (
        <div className='w-10/12 mx-auto min-h-screen flex justify-center flex-col items-center'>
            <h1 className='text-lg md:text-2xl font-bold'>৪০৪ - দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন, সেটি খুঁজে পাওয়া যায়নি।

            </h1>
            <p className='text-[14px] md:text-xl mt-4'>পৃষ্ঠাটি সরিয়ে ফেলা হয়ে থাকতে পারে, অথবা আপনি ভুল ঠিকানা লিখেছেন।</p>

            <Link href="/" className="text-xs md:text-sm inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-blue-500 text-white font-medium shadow-sm hover:bg-blue-600 hover:shadow-md active:scale-95 transition-all duration-200">⬅︎ হোম পেজে ফিরে যান</Link>
        </div>
    );
};

export default GlobalNotFound;