import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const Statistics = () => {

    const [itemsLength, setItemsLength] = useState(0);

    useEffect(() => {
        (JSON.parse(localStorage.getItem('donation'))) !== null && setItemsLength((JSON.parse(localStorage.getItem('donation'))).length)
    }, [])

    const data1 = itemsLength;
    const data2 = 12 - data1;

    const data = [
        {
            "name": "myDonation",
            "value": data1,
        },
        {
            "name": "totalDonation",
            "value": data2,
        }
    ];

    const colors = ['#00C49F', '#FF444A'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    }

    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <PieChart width={300} height={250} className='mx-auto mt-10'>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                    }
                </Pie>
            </PieChart>

            <div className='flex flex-col justify-center gap-4 md:flex-row lg:gap-14 mt-10 md:mt-20'>
                <div className='flex gap-3 justify-center'>
                    <p>Your Donation:</p>
                    <p className=' bg-[#00C49F] w-[100px] my-1'></p>
                </div>
                <div className='flex gap-3 justify-center'>
                    <p>Total Donation:</p>
                    <p className=' bg-[#FF444A] w-[100px] my-1'></p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;