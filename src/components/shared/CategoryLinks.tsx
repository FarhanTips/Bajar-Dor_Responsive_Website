"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CategoryType } from "./navLinks";


interface CategoryLinksProps {
    data: CategoryType[];
}

const CategoryLinks = ({ data }: CategoryLinksProps) => {
    const pathname = usePathname();
    console.log(pathname);

    return (

        <div className="mt-3 flex w-full items-center gap-4 overflow-x-auto whitespace-nowrap px-1 pb-2 text-[10px] font-semibold sm:mt-4 sm:gap-6 sm:text-sm lg:gap-10">
            {data.map((d) => (
                <Link
                    href={d.slug}
                    key={d.id}
                    className="flex shrink-0 items-center gap-1.5 transition-colors hover:text-[#047F39]"
                >
                    <span>{d.icon}</span>
                    <span className={pathname === `/${d.slug}` ? "text-[#047F39]" : ""}>
                        {d.nameBn}
                    </span>
                </Link>
            ))}
        </div>
    )
};

export default CategoryLinks;
