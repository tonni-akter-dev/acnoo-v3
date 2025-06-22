import Banner from "../components/Banner"
import BottomBanner from "../home/components/BottomBanner"
import Categories from "./components/Categories"
import RightSideCard from "./components/RightSideCard"

const products = () => {
   return (
      <>
         <Banner title="Products" />
         <div className="lg:mb-[60px] products_parent products_wrapper w-full mx-auto px-5">
            <div className="flex gap-8 py-2.5 mb-8 lg:py-[60px]">
               <div className="w-[344px] lg:block hidden category_wrapper">
                  <Categories />
               </div>
               <div className="w-full">
                  <RightSideCard />
               </div>
            </div>
         </div>
         <BottomBanner />
      </>
   )
}

export default products