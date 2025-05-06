
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { FaChartBar, FaRegHandshake } from 'react-icons/fa';
import { PiBellSimpleRingingBold } from 'react-icons/pi';
import { IconType } from 'react-icons';

interface SupportCardProps {
   Icon: IconType;
   title: string;
   description: string;
}

const supportData: SupportCardProps[] = [
   {
      Icon: FaRegHandshake,
      title: 'Long-Term <br /> Growth',
      description:
         'Partner with Foodics and establish a career in the SaaS business with great potential for development',
   },
   {
      Icon: TfiHeadphoneAlt,
      title: 'Unlimited <br /> Support',
      description:
         'Get all the support needed to better understand our products (tech, sales, marketing)',
   },
   {
      Icon: FaChartBar,
      title: 'Become a <br /> Market Leader',
      description:
         'Help businesses in the F&B industry to grow their operations with our product and become a market',
   },
   {
      Icon: PiBellSimpleRingingBold,
      title: 'Customized reminder <br /> alerts',
      description:
         'Web hosting provides everything idea online. From where your',
   },
];

const SupportCard: React.FC<SupportCardProps> = ({ Icon, title, description }) => (
   <div className="bg-[#EBF5FE] hover:bg-[#2F1C6A] hover:text-white rounded-xl pt-8 md:pt-16  pb-[54px] px-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group">
      <div className='rounded-full bg-white text-[#2F1C6A] group-hover:text-white group-hover:bg-[#ffffff1c] transition-colors duration-300 size-[93px] flex justify-center items-center'>
         <Icon
            className=" size-10 md:size-[50px]"
         />
      </div>
      <h2
         className="text-2xl font-semibold text-gray-800 mt-12 group-hover:text-white"
         dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="text-gray-500 w-[260px] mt-6 group-hover:text-gray-300">
         {description}
      </p>
   </div>
);

const UnlimitedSupport: React.FC = () => {
   return (
      <div className="container mx-auto lg:py-12 lg:px-0 px-5">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportData.map((item, index) => (
               <SupportCard
                  key={index}
                  Icon={item.Icon}
                  title={item.title}
                  description={item.description}
               />
            ))}
         </div>
      </div>
   );
};

export default UnlimitedSupport;
