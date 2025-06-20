import Image from 'next/image';

import available from '/public/available.png'
import envato from '/public/envato.png'
import f1 from '/public/f1.png'
import f2 from '/public/f2.png'
import f3 from '/public/f3.png'
import f4 from '/public/f4.png'
import f5 from '/public/f5..png'
import f6 from '/public/f6.png'
const addons = [
  'HRM Management',
  'Admin Panel',
  'Influencer Hiring',
  'Pos Saas',
  'Maan AI',
  'Cash Rocket',
];
const about = [
  'Web Developer',
  'Mobile Application',
  'Software Development',
  'Digital Marketing',
  'UI/UX Design',
  'Graphic Design',
]
const product = ["Acnoo admin - Flutter Admin Dashboard with PWA", "POSpro - POS Inventory", "POSpro - POS Inventory", "POSpro - POS Inventory", "ExpensePro-Task & Expense Management", "ExpensePro-Task & Expense Management", "ExpensePro-Task & Expense Management", "Food Table-QR Code Restaurant", "Food Table-QR Code Restaurant", "Food Table-QR Code Restaurant", "POS SAAS - Flutter POS Billing", "POS SAAS - Flutter POS Billing", "POS SAAS - Flutter POS Billing", "Garments ERP - Apparel & Textile Industrial", "Garments ERP - Apparel & Textile Industrial", "Garments ERP - Apparel & Textile Industrial"]

const AdminFooter = () => {
  return (
    <div className="lg:pt-[120px] py-8 lg:pb-[75px] admin-footer-bg p-6  text-white">
      <div className='max-w-[1440px] mx-auto'>
        <div className=" flex flex-col md:flex-row md_flex_row2 lg:gap-0 md:gap-[64px] gap-8 lg:justify-around ">
          <div className='max-w-[327px] lg:max-w-[343px]'>
            <h3 className='text-2xl mb-3.5 font-bold'>About Us</h3>
            <p className='text-base font-medium mb-9'>Acnoo Software is a leading technology company specializing in software development, mobile app development, and UI/UX design. We deliver innovative, scalable, and user-friendly solutions tailored to meet modern business needs.</p>
            <div className='flex gap-6 items-center mb-8'>
              <Image src={available} alt="" />
              <div className='bg-[#FFFFFF2B] h-8 w-[1px] '></div>
              <Image src={envato} alt="" />
            </div>
            <div className='flex items-center gap-2.5'>
              <Image src={f1} alt="" />
              <Image src={f2} alt="" />
              <Image src={f3} alt="" />
              <Image src={f4} alt="" />
              <Image src={f5} alt="" />
              <Image src={f6} alt="" />
            </div>
          </div>
          <div className='md:block md_block hidden'>
            <h3 className='text-2xl mb-3.5 font-bold'>Service</h3>
            <ul className='flex flex-col gap-2'>
              {about.map((item, index) => (
                <li key={index} className='text-base font-medium flex items-center gap-2'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:block md_hidden hidden'>
            <h3 className='text-2xl mb-3.5 font-bold'>Add-ons</h3>
            <ul className='flex flex-col gap-2'>
              {addons.map((item, index) => (
                <li key={index} className='text-base font-medium flex items-center gap-2'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* sm device */}
          <div className='md:hidden md_hidden flex  gap-8 mt-8'>
            <div>
              <h3 className='text-2xl mb-3.5 font-bold'>Service</h3>
              <ul className='flex flex-col gap-2'>
                {about.map((item, index) => (
                  <li key={index} className='text-base font-medium flex items-center gap-2'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className=''>
              <h3 className='text-2xl mb-3.5 font-bold'>Add-ons</h3>
              <ul className='flex flex-col gap-2'>
                {addons.map((item, index) => (
                  <li key={index} className='text-base font-medium flex items-center gap-2'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <div className='lg:block md_hidden  md:hidden block'>
            <h3 className='text-2xl mb-3.5 font-bold'>Product</h3>
            <ul className='flex flex-col gap-2'>
              {product.map((item, index) => (
                <li key={index} className='text-base font-medium flex items-center gap-2'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* md device */}
        <div className='lg:hidden md_flex1 md:flex hidden  gap-[64px] mt-8'>
          <div className='w-[380px]'>
            <h3 className='text-2xl mb-3.5 font-bold'>Add-ons</h3>
            <ul className='flex flex-col gap-2'>
              {addons.map((item, index) => (
                <li key={index} className='text-base font-medium flex items-center gap-2'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-2xl mb-3.5 font-bold'>Product</h3>
            <ul className='flex flex-col gap-2'>
              {product.map((item, index) => (
                <li key={index} className='text-base font-medium flex items-center gap-2'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminFooter