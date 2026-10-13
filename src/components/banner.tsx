import Image from "next/image";
import banner_pic from "@/assets/bazar-hero.png"
import { Button } from "@heroui/react";


const Banner = () => {
    return (
        <section className="w-10/12 mx-auto grid items-center gap-8 rounded-2xl bg-white border border-gray-300 p-4 my-6 sm:my-8 sm:p-5 
        sm:grid-cols-2 lg:p-8 sm:gap-2">
            {/* Left content */}
            <div>
                <span className="inline-block text-[8px] sm:text-[10px] md:text-xs leading-relaxed text-[#05893E] bg-[#05893E]/10 mb-4 border rounded-3xl px-3 py-2 font-semibold">
                    {new Date().toLocaleDateString("bn-BD", {
                        dateStyle: "full",
                        calendar: "gregory",
                    })}
                </span>
                <p className="mb-3 text-lg md:text-2xl lg:text-4xl font-semibold">
                    আজকের বাজারের দাম এক নজরে
                </p>


                <p className="mt-4 text-[10px] leading-7 text-gray-500 sm:text-xs lg:text-sm">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                </p>

                <Button className="bg-[#047F39] text-[10px] sm:text-xs px-3 py-3 font-semibold rounded-lg sm:px-5 sm:py-5 mt-8"><a href="#সব-পণ্য">সব পণ্য দেখুন →</a></Button>

            </div>

            {/* Right banner image */}
            <div className="flex justify-center lg:justify-end">
                <Image
                    src={banner_pic}
                    alt="Banner Image"
                    width={200}
                    height={200}
                    priority
                    className="h-auto w-60 lg:w-87.5 max-w-md rounded-xl object-cover lg:max-w-full"
                />
            </div>
        </section>
    );
};

export default Banner;