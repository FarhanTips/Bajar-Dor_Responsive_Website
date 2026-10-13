import Banner from "@/components/banner";
import ProductsCard from "@/components/productsCard";

export interface ProductType {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  }[];
};

export default async function Home() {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
  const products: ProductType[] = await res.json();
  return (
    <div className="bg-[#F0F5F0]">
      <Banner></Banner>
      
      <div className="w-10/12 mx-auto">
        <p className="text-[16px] md:text-xl font-bold">সব পণ্য</p>
        <p className="text-[10px] md:text-sm text-gray-500 mb-6 mt-2 font-medium">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            products.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
          }
        </div>
      </div>
    </div>
  );
}
