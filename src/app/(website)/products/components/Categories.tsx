import Title from './Title'
import { categoriesData, RatingData, SaleData, softwareVersionsData } from '@/app/utils/data'
import CategoriesCheckbox from './CategoriesCheckbox'
import PriceRangeSlider from './PriceRangeSlider'
const Categories = () => {
   return (
      <div className='category h-auto mb-4'>
         <Title title='Catagories' />
         <ul className="mt-4 space-y-2">
            {categoriesData.map((category, index) => (
               <li key={index} className="flex justify-between p-2 font-medium">
                  <span className="text-primary ">{category.name}</span>
                  <span className="text-[#6B7280]">{category.count}</span>
               </li>
            ))}
         </ul>
         <PriceRangeSlider/>
      <CategoriesCheckbox title='Software Version' data={softwareVersionsData}/>
      <CategoriesCheckbox title='Sales' data={SaleData}/>
      <CategoriesCheckbox title='Rating' data={RatingData}/>
      </div>
   )
}

export default Categories