import Banner from '../components/Banner';
import PersonalLicense from '../components/PerSonalLicense/PersonalLicense';
import BottomBanner from '../home/components/BottomBanner';
import PolicyForm from './component/PolicyForm';


const Policy = () => {
     
    return (
        <div>
            <Banner title='Privacy & Policy'/>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 pt-[66px]'>
            <PolicyForm/>
            <PersonalLicense/>
            </div>
            <BottomBanner/> 
        </div>
    );
};

export default Policy;