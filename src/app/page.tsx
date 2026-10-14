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

  const productsWithPriceIncrease = products.filter(p => p.change.dir === "up").sort((a, b) => b.change.pct - a.change.pct);

  const productsWithPriceDeccrease = products.filter(p => p.change.dir === "down").sort((a, b) => a.change.pct - b.change.pct);

  return (
    <div className="bg-[#F0F5F0] pb-30">
      <Banner></Banner>

      <div className="w-10/12 mx-auto">
        {/* আজ দাম বেড়েছে section */}

        <p className="text-[16px] md:text-xl font-bold mb-6 mt-12"><span className="text-red-600">▲ </span>আজ দাম বেড়েছে</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            productsWithPriceIncrease.slice(0, 6).map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
          }

        </div>

        {/* আজ দাম কমেছে section */}

        <p className="text-[16px] md:text-xl font-bold mb-6 mt-12"><span className="text-green-600">▼ </span>আজ দাম কমেছে</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            productsWithPriceDeccrease.slice(0, 6).map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
          }
        </div>


        {/* সব পণ্য section */}

        <p id="সব-পণ্য" className="text-[16px] md:text-xl font-bold mt-12">সব পণ্য</p>
        <p className="text-[10px] md:text-sm text-gray-500 mb-6 mt-2 font-medium">মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            products.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
          }

        </div>
      </div>

    </div>
  );
}
