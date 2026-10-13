import { ProductType } from "@/app/page";

interface ProductsCardProps {
    product: ProductType;
}

const unitKeys = ["kg", "litre", "dozen", "piece"];
const units = ["কেজি", "লিটার", "ডজন", "টি"];

const ProductsCard = ({ product }: ProductsCardProps) => {
    return (
        <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="flex gap-4">
                <p className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#F0F5F0] text-3xl">{product.image}</p>
                <div>
                    <p className="font-bold text-gray-800 text-sm md:text-base">{product.nameBn}</p>
                    <p className="mt-1 text-xs md:text-sm text-gray-500">প্রতি {units[unitKeys.indexOf(product.unit)]}</p>
                </div>
            </div>

            <div className="mt-3">
                <div>
                    <p className=" rounded py-1 text-[10px] md:text-xs text-gray-800">আজকের দাম</p>

                    <div className="flex justify-between items-center">
                        <p className="text-xs md:text-sm">
                            <span className="text-lg md:text-xl font-bold">{product.today.toLocaleString("bn-BD")}</span> টাকা
                        </p>

                        <p
                            className={`shrink-0 text-xs md:text-sm font-semibold ${product.change.dir === "up"
                                ? "text-red-600"
                                : product.change.dir === "down"
                                    ? "text-green-600"
                                    : "text-gray-500"
                                }`}
                        >
                            {product.change.pct > 0
                                ? `▼ ${product.change.pct.toLocaleString("bn-BD")}%`
                                : product.change.pct < 0
                                    ? `▲ ${Math.abs(product.change.pct).toLocaleString("bn-BD")}%`
                                    : "— ০.০%"}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductsCard;