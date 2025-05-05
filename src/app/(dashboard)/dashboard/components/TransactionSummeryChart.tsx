'use client'
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Purchase: 25000, Refund: 5000 },
  { name: 'Feb', Purchase: 50000, Refund: 25000 },
  { name: 'Mar', Purchase: 50000, Refund: 25000 },
  { name: 'Apr', Purchase: 10000, Refund: 5000 },
  { name: 'May', Purchase: 25000, Refund: 10000 },
  { name: 'Jun', Purchase: 50000, Refund: 25000 },
  { name: 'Jul', Purchase: 5000, Refund: 300 },
  { name: 'Aug', Purchase: 75000, Refund: 25000 },
  { name: 'Sep', Purchase: 10000, Refund: 5000 },
  { name: 'Oct', Purchase: 50000, Refund: 25000 },
  { name: 'Nov', Purchase: 50000, Refund: 25000 },
  { name: 'Dec', Purchase: 10000, Refund: 5000 },
];

const TransactionSummaryChart = () => {
  return (
    <div className='bg-white w-full mt-6 rounded-xl' style={{ boxShadow: '0px 4px 30px 0px rgba(46, 45, 116, 0.05)' }}>
      <div className='flex justify-between p-3 border-b mb-3 border-[#E5E7EB]'>
        <h3 className='text-[#0B071A] text-xl font-medium'>Transaction and Refund Summary</h3>
        <select name="" className="border max-w-fit rounded-[6px]">
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className='flex justify-center px-5 pb-3'>
        <div className='flex items-center'>
          <span className='w-4 h-4 rounded-full bg-[#4A69E2] mr-2'></span>
          <span className='text-[#0B071A] text-base'><span className='text-[#6B7280]'>Purchase:</span> $3000.00</span>
        </div>
        <div className='flex items-center ml-4'>
          <span className='w-4 h-4 rounded-full bg-[#FFA2C0] mr-2'></span>
          <span className='text-[#0B071A] text-base'> <span className='text-[#6B7280]'>Refund:</span> $100.00</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart
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
            ticks={[0, 10000, 25000, 50000, 100000]}
          />
          <Tooltip
            formatter={(value, name) => [`$${value}`, name]}
            labelFormatter={(label) => `${label} 2025`}
          />
          <Bar dataKey="Purchase" fill="#4A69E2" activeBar={<Rectangle fill="#4A69E2" stroke="blue" />} />
          <Bar dataKey="Refund" fill="#FFA2C0" activeBar={<Rectangle fill="#FFA2C0" stroke="pink" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionSummaryChart;