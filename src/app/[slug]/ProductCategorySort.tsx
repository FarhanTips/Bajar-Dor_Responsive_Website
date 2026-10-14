"use client"

import ProductsCard from "@/components/productsCard";
import { ProductType } from "../page";
import { useState } from "react";
import { Select, ListBox, } from "@heroui/react";

interface ProductCategorySortProps {
    products: ProductType[];
}

type SortType = "ascending" | "descending" | "default";

const ProductCategorySort = ({ products }: ProductCategorySortProps) => {

    const [sortBy, setSortBy] = useState<SortType>("default");

    const sortCategoryProducts = (pList: ProductType[]) => {
        const sortedProductsList = [...pList];
        if (sortBy === "descending" || sortBy == "default") {
            sortedProductsList.sort((a, b) => b.today - a.today);
        }
        else if (sortBy === "ascending") {
            sortedProductsList.sort((a, b) => a.today - b.today);
        }

        return sortedProductsList;
    }

    const sortedProducts = sortCategoryProducts(products);


    return (

        <div className="bg-[#F0F5F0] pb-30 pt-10">
            <div className="w-10/12 mx-auto">

                <div className="flex gap-3 bg-white px-3 py-8 rounded-xl mb-10">
                    <p className="text-5xl md:text-6xl">{products[0].image}</p>

                    <div>
                        <p className="font-bold text-black text-2xl md:text-3xl">{products[0].categoryNameBn}</p>
                        <p className="mt-2 text-xs md:text-sm text-gray-500">{products.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>

                {/* Sort */}
                <div className="flex gap-3 justify-end items-center bg-white py-5 px-6 rounded-xl mt-4">
                    <p className="text-xs md:text-base text-gray-500">সাজান</p>

                    <Select className="w-44" value={sortBy}
                        onChange={(key) => {
                            setSortBy(key as SortType);
                        }}>
                        {/* <Label>সাজানোর পদ্ধতি</Label> */}

                        <Select.Trigger className="rounded-3xl border border-gray-400 text-xs">
                            <Select.Value className="text-xs md:text-sm" />
                            <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="default" textValue="ডিফল্ট">
                                    ডিফল্ট
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                                <ListBox.Item id="ascending"
                                    textValue="দাম: কম থেকে বেশি">
                                    দাম: কম থেকে বেশি
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                                <ListBox.Item id="descending"
                                    textValue="দাম: বেশি থেকে কম">
                                    দাম: বেশি থেকে কম
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>

                <p className="text-[10px] md:text-sm text-gray-500 my-6 font-medium">মোট {sortedProducts.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {
                        sortedProducts.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
                    }

                </div>
            </div>

        </div>
    );
};

export default ProductCategorySort;
