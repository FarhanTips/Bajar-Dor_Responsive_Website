import { ProductType } from "@/app/page";
import { notFound } from "next/navigation";

interface ProductDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const unitKeys = ["kg", "litre", "dozen", "piece"];
const units = ["কেজি", "লিটার", "ডজন", "টি"];

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
    const { id } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`);
    const product: ProductType = await res.json();
    console.log(product);
    if (!product.id) {
        notFound();
    }


    return (
        <div className="bg-[#F0F5F0] pt-10 pb-30">
            <div className="w-10/12 mx-auto">

                {/* Product Summary */}
                <div className="flex flex-col sm:flex-row gap-6 justify-between items-center rounded-2xl p-4 bg-white mb-10">

                    <div className="flex gap-4">
                        <p className="flex h-24 w-24  items-center justify-center rounded-xl bg-[#F0F5F0] text-5xl md:text-6xl">{product.image}</p>

                        <div>
                            <p className="font-bold text-black text-xl md:text-3xl">{product.nameBn}</p>
                            <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-500">প্রতি {units[unitKeys.indexOf(product.unit)]} {product.categoryNameBn}</p>

                            <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-700">
                                {product.today > product.yesterday ?
                                    <span>
                                        গতকালের তুলনায় আজ দাম <span className="font-bold">বেড়েছে</span>  {(product.today - product.yesterday).toLocaleString("bn-BD")} টাকা
                                    </span>
                                    : product.today < product.yesterday ?
                                        <span>
                                            গতকালের তুলনায় আজ দাম <span className="font-bold">কমেছে</span> {(product.yesterday - product.today).toLocaleString("bn-BD")} টাকা
                                        </span>
                                        :
                                        <span>গতকালের তুলনায় আজ দাম <span className="font-bold">অপরিবর্তিত</span></span>
                                }
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col h-34 w-32 items-center justify-center rounded-xl bg-[#F0F5F0]">
                        <p className="text-xs md:text-sm text-gray-500">আজকের দাম</p>
                        <h2 className="text-xl md:text-2xl font-bold mt-1">{product.today.toLocaleString("bn-BD")}</h2>
                        <p className="text-xs md:text-sm text-gray-500 mt-1">টাকা / {units[unitKeys.indexOf(product.unit)]}</p>

                        <p className={`shrink-0 text-xs mt-1 md:text-sm font-semibold ${product.change.dir === "up"
                            ? "text-red-600"
                            : product.change.dir === "down"
                                ? "text-green-600"
                                : "text-gray-500"
                            }`}
                        >
                            {product.change.dir === "up"
                                ? `▲ ${product.change.pct.toLocaleString("bn-BD")}%`
                                : product.change.dir === "down"
                                    ? `▼ ${Math.abs(product.change.pct).toLocaleString("bn-BD")}%`
                                    : "— ০.০%"}
                        </p>
                    </div>
                </div>





                <div className="overflow-hidden rounded-2xl border bg-white py-8">


                    {/* Price Summary */}
                    <div className="px-4">
                        <p className="font-bold text-sm md:text-lg mb-3">দামের সারসংক্ষেপ</p>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
                            <div className="rounded-xl border p-4">
                                <p className="text-xs md:text-sm text-gray-700">সর্বনিম্ন দাম</p>
                                <h3 className="mt-0 text-xl md:text-2xl font-bold text-green-600">
                                    {(Math.min(...product.markets.map((m) => m.min))).toLocaleString("bn-BD")} <span className="text-xs md:text-sm">টাকা</span>
                                </h3>
                                <p className="text-[10px] md:text-xs mt-1 text-gray-500">সবচেয়ে কম দামের বাজার</p>
                            </div>

                            <div className="rounded-xl border p-4">
                                <p className="text-xs md:text-sm text-gray-700">সর্বোচ্চ দাম</p>
                                <h3 className="mt-0 text-xl md:text-2xl font-bold text-red-600">
                                    {(Math.max(...product.markets.map((m) => m.max))).toLocaleString("bn-BD")} <span className="text-xs md:text-sm">টাকা</span>
                                </h3>
                                <p className="text-[10px] md:text-xs mt-1 text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
                            </div>

                            <div className="rounded-xl border p-4">
                                <p className="text-xs md:text-sm text-gray-700">গড় দাম</p>
                                <h3 className="mt-0 text-xl md:text-2xl font-bold text-green-600">
                                    {product.markets.length
                                        ? Number(
                                            (product.markets.reduce(
                                                (sum, m) => sum + (m.min + m.max) / 2, 0) / product.markets.length).toFixed(2)
                                        ).toLocaleString("bn-BD", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })
                                        : product.today.toLocaleString("bn-BD")} <span className="text-xs md:text-sm">টাকা</span>
                                </h3>
                                <p className="text-[10px] md:text-xs mt-1 text-gray-500">প্রতি {units[unitKeys.indexOf(product.unit)]}-এর হিসাবে</p>
                            </div>
                        </div>
                    </div>


                    {/* Market-wise Prices */}
                    <div className="px-4">
                        <h2 className="text-sm md:text-lg font-bold">বাজারভিত্তিক আজকের দাম</h2>
                        <p className="text-xs md:text-sm mt-1 text-gray-500">
                            বিভিন্ন বাজারে {product.nameBn}-এর দাম
                        </p>
                    </div>

                    <div className="px-4">
                        <div className="overflow-x-auto rounded-2xl border">
                            <table className="w-full min-w-150  text-left text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="p-3 text-xs md:text-base">বাজার</th>
                                        <th className="p-3 text-xs md:text-base">বিভাগ</th>
                                        <th className="p-3 text-xs md:text-base">সর্বনিম্ন</th>
                                        <th className="p-3 text-xs md:text-base">সর্বোচ্চ</th>
                                        <th className="p-3 text-xs md:text-base">গড়</th>
                                    </tr>
                                </thead>

                                <tbody className="text-xs md:text-base">
                                    {product.markets.map((market, index) => (
                                        <tr
                                            key={`${market.market}-${index}`}
                                            className="border-t"
                                        >
                                            <td className="p-3 font-medium">{market.market}</td>
                                            <td className="p-3">{market.division}</td>
                                            <td className="p-3">{market.min.toLocaleString("bn-BD")}</td>
                                            <td className="p-3">{market.max.toLocaleString("bn-BD")}</td>
                                            <td className="p-3 font-medium">
                                                {((market.min + market.max) / 2).toLocaleString("bn-BD", {
                                                    maximumFractionDigits: 2,
                                                })}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
