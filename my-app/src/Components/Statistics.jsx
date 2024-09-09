import React from "react";
// import {
//     ResponsiveContainer,
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     AreaChart,
//     Area,
// } from "recharts";

function Statistics() {
    const data = [
        { name: "Page A", uv: 4000, pv: 2400, amt: 2400, kt: 5200 },
        { name: "Page B", uv: 3000, pv: 1398, amt: 2210, kt: 3214 },
        { name: "Page C", uv: 2000, pv: 9800, amt: 2290, kt: 4234 },
        { name: "Page D", uv: 2780, pv: 3908, amt: 2000, kt: 5345 },
        { name: "Page E", uv: 1890, pv: 4800, amt: 2181, kt: 6456 },
        { name: "Page F", uv: 2390, pv: 3800, amt: 2500, kt: 7567 },
        { name: "Page G", uv: 3490, pv: 4300, amt: 2100, kt: 8678 },
        { name: "Page A", uv: 4000, pv: 2400, amt: 2400, kt: 8678 },
        { name: "Page B", uv: 3000, pv: 1398, amt: 2210, kt: 9696 },
        { name: "Page C", uv: 2000, pv: 9800, amt: 2290, kt: 4234 },
        { name: "Page D", uv: 2780, pv: 3908, amt: 2000, kt: 7567 },
        { name: "Page E", uv: 1890, pv: 4800, amt: 2181, kt: 9797 },
        { name: "Page F", uv: 2390, pv: 3800, amt: 2500, kt: 9789 },
        { name: "Page G", uv: 3490, pv: 4300, amt: 2100, kt: 4234 },
        { name: "Page A", uv: 4000, pv: 2400, amt: 2400, kt: 4423 },
        { name: "Page B", uv: 3000, pv: 1398, amt: 2210, kt: 3423 },
        { name: "Page C", uv: 2000, pv: 9800, amt: 2290, kt: 5345 },
        { name: "Page D", uv: 2780, pv: 3908, amt: 2000, kt: 6562 },
        { name: "Page E", uv: 1890, pv: 4800, amt: 2181, kt: 3225 },
        { name: "Page F", uv: 2390, pv: 3800, amt: 2500, kt: 6466 },
        { name: "Page G", uv: 3490, pv: 4300, amt: 2100, kt: 6456 },
        { name: "Page A", uv: 4000, pv: 2400, amt: 2400, kt: 7675 },
        { name: "Page B", uv: 3000, pv: 1398, amt: 2210, kt: 7645 },
        { name: "Page C", uv: 2000, pv: 9800, amt: 2290, kt: 4234 },
        { name: "Page D", uv: 2780, pv: 3908, amt: 2000, kt: 6878 },
        { name: "Page E", uv: 1890, pv: 4800, amt: 2181, kt: 8678 },
        { name: "Page F", uv: 2390, pv: 3800, amt: 2500, kt: 4234 },
        { name: "Page G", uv: 3490, pv: 4300, amt: 2100, kt: 8678 },
    ];

    return (
        <div class="bg-white font-Kanit" data-theme="retro">
            <div class="lg:block hidden h-[664px]">
                <div class="w-full p-5 text-center">
                    <div class="font-bold sm:text-lg xl:text-xl 2xl:text-2xl text-info mb-5">
                        CHI TIẾT THỐNG KÊ HỆ THỐNG
                    </div>
                </div>
            </div>
            <div class="lg:hidden "></div>
        </div>
    );
}

export default Statistics;
