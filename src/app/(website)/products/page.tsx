import Banner from "../components/Banner"
import BottomBanner from "../home/components/BottomBanner"
import Categories from "./components/Categories"
import RightSideCard from "./components/RightSideCard"

const products = () => {
   return (
      <>
         <Banner title="Products" />
         <div className="lg:mb-[60px] max-w-[1461px] mx-auto px-4 md:px-5 lg:px-0">
            <div className="grid grid-cols-12 gap-8 py-2.5 mb-8 lg:py-[60px]">
               <div className="col-span-12 lg:col-span-4 lg:block hidden">
                  <Categories />
               </div>
               <div className="col-span-12 lg:col-span-8">
                  <RightSideCard />
               </div>
            </div>
         </div>
         <BottomBanner />
      </>
   )
}

export default products