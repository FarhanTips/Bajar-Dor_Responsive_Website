
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


interface HeadLineType {
    id: number;
    nameBn: string;
    unit: string;
    image: string
    today: number;
    change: {
        dir: string;
        pct: number;
    };
}

const unitKeys = ["kg", "litre", "dozen", "piece"];
const units = ["কেজি", "লিটার", "ডজন", "টি"];

const Marquee = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data: HeadLineType[] = await res.json();

    return (
        <div className='bg-white mt-8 sticky top-0 z-50'>

            <div className='border border-gray-200 py-2 text-sm'>
                

                <MarqueeText direction="right" duration={15}>
                    {data.map((d) => (
                        <span key={d.id} className="inline-block mr-5 font-medium">
                            <span>
                                {d.image} <span className='font-semibold'>{d.nameBn}</span>{" "}
                                {d.today.toLocaleString("bn-BD")} টাকা/
                                {units[unitKeys.indexOf(d.unit)]}{" "}

                                <span className={d.change.pct > 0
                                    ? "text-green-700"
                                    : d.change.pct < 0 ?
                                        "text-red-700" : "text-gray-500"
                                }>
                                    {d.change.pct > 0
                                        ? `▼ ${d.change.pct.toLocaleString("bn-BD")}%`
                                        : d.change.pct < 0
                                            ? `▲ ${Math.abs(d.change.pct).toLocaleString("bn-BD")}%`
                                            : "— ০%"}
                                </span>
                            </span>
                        </span>
                    ))}
                </MarqueeText>
            </div>

        </div>
    );
};

export default Marquee;
