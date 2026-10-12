
import CategoryLinks from "./CategoryLinks";

export interface CategoryType {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const NavLinks = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");

    const data: CategoryType[] = await res.json();

    return (
        <div className="mx-auto w-10/12">
            <CategoryLinks data={data} />
        </div>
    );
};

export default NavLinks;
