import BecomePartnerBanner from './components/BecomePartnerBanner';
import UnlimitedSupport from './components/UnlimitedSupport';
import FAQSection from './components/FAQSection';
import Form from './components/Form';
import BottomBanner from '../home/components/BottomBanner';

const BecomePartner = () => {
   return (
      <div>
         <BecomePartnerBanner />
         <UnlimitedSupport />
         <FAQSection />
         <Form />
         <BottomBanner />
      </div>
   );
};

export default BecomePartner;