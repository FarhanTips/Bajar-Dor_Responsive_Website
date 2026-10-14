import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-300">
            <div className="w-10/12 mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-3">

                {/* Left */}
                <p className="text-xs md:text-sm text-gray-700">
                    <span className=" text-black">বাজার দর</span>
                    {" "}— প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </p>

                {/* Right */}
                <p className="text-xs md:text-sm text-gray-500">
                    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                </p>

            </div>
        </footer>
    );
};

export default Footer;
