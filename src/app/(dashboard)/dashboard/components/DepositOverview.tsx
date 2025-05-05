
'use client'
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', Deposit: 50000 },
    { name: 'Feb', Deposit: 75000 },
    { name: 'Mar', Deposit: 50000 },
    { name: 'Apr', Deposit: 25000 },
    { name: 'May', Deposit: 50000 },
    { name: 'Jun', Deposit: 25000 },
    { name: 'Jul', Deposit: 2000 },
    { name: 'Aug', Deposit: 25000 },
    { name: 'Sep', Deposit: 75000 },
    { name: 'Nov', Deposit: 25000 },
    { name: 'Oct', Deposit: 50000 },
    { name: 'Dec', Deposit: 25000 },
];

const DepositOverview = () => {
    return (
        <div className='bg-white w-full mt-6 rounded-xl' style={{ boxShadow: '0px 4px 30px 0px rgba(46, 45, 116, 0.05)' }}>
            <div className='flex justify-between p-3 border-b mb-3 border-[#E5E7EB]'>
                <h3 className='text-[#0B071A] text-xl font-medium'>Deposit Overview</h3>
                <select name="" className="border max-w-fit rounded-[6px]">
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className='flex justify-center px-5 pb-3'>
                <div className='flex items-center '>
                    <span className='w-4 h-4 rounded-full bg-[#4A69E2] mr-2'></span>
                    <span className='text-[#0B071A] text-sm'>Total Deposit: $3.5k</span>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
                <AreaChart

                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis
                        tickFormatter={(value) => `$${value / 1000}k`}
                        domain={[0, 100000]}
                        ticks={[0, 10000    , 25000, 50000, 100000]}
                    />
                    <Tooltip
                        formatter={(value, name) => [`$${value}`, name]}
                        labelFormatter={(label) => `${label} 2025`}
                    />
                    <Area type="monotone" dataKey="Deposit" stroke="#4A69E2" fill="#E6E9FF" fillOpacity={0.6} />
                </AreaChart>

            </ResponsiveContainer>
        </div>
    );
};

export default DepositOverview;