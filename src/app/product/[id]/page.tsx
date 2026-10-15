import { ProductType } from "@/app/page";

interface ProductDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const ProductDetailsPage = async ({params}: ProductDetailsPageProps) => {
    const {id} = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`);
    const product: ProductType = await res.json();
    console.log(product);
    return (
        <div>
            
        </div>
    );
};

export default ProductDetailsPage;
