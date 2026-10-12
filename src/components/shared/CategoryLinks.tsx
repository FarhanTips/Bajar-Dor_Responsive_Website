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

        <div className="space-x-10 mt-4 text-sm font-semibold">
            {
                data.map(d =>
                    <Link href={d.slug} key={d.id}>
                        <span>{d.icon}</span>
                        <span className={`${pathname === `/${d.slug}` ? "text-[#047F39]" : ""}`}> {d.nameBn}</span>
                    </Link>)
            }
        </div>
    )
};

export default CategoryLinks;
