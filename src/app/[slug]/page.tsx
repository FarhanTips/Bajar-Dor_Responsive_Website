

import { notFound } from "next/navigation";
import { ProductType } from "../page";
import ProductCategorySort from "./ProductCategorySort";

interface ProductCategoryPage {
    params: Promise<{
        slug: string;
    }>;
}

const ProductCategoryPage = async ({ params }: ProductCategoryPage) => {

    const { slug } = await params;
    // console.log("Category:", slug);
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`);
    const products: ProductType[] = await res.json();

    console.log(products);
    if (products.length < 1) {
        notFound();
    }
    return (
        <div>
            <ProductCategorySort products={products}></ProductCategorySort>
        </div>

    );
};

export default ProductCategoryPage;
