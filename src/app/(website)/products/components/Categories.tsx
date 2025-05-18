'use client'
import Title from './Title'
import { categoriesData, RatingData, SaleData, softwareVersionsData } from '@/app/utils/data'
import CategoriesCheckbox from './CategoriesCheckbox'
import PriceRangeSlider from './PriceRangeSlider'
import { motion } from 'framer-motion';

const listItemVariant = {
   hidden: { opacity: 0, y: 20 },
   visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
   }),
};

const Categories = () => {
   return (
      <div className='category h-auto mb-4'>
         <Title title='Catagories' />
         <motion.ul
            className="mt-4 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
         >
            {categoriesData.map((category, index) => (
               <motion.li
                  key={category.name}
                  custom={index}
                  variants={listItemVariant}
                  className="flex justify-between p-2 font-medium"
               >
                  <span className="text-primary">{category.name}</span>
                  <span className="text-[#6B7280]">{category.count}</span>
               </motion.li>
            ))}
         </motion.ul>
         <PriceRangeSlider />
         <CategoriesCheckbox title='Software Version' data={softwareVersionsData} />
         <CategoriesCheckbox title='Sales' data={SaleData} />
         <CategoriesCheckbox title='Rating' data={RatingData} />
      </div>
   )
}

export default Categories