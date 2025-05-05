import React from 'react'
import Banner from './Banner'
import ProductsFeature from './ProductsFeature'
import UniqueHomePages from './UniqueHomePages'
import BuisnessOperate from './BuisnessOperate'
import TrackingInfo from './TrackingInfo'
import ResponsiveLayout from './ResponsiveLayout'
import Testimonial from '../../adminDashboard/components/Testimonial'
import Trusted from '../../adminDashboard/components/Trusted'
import Pricing from '../../adminDashboard/components/Pricing'
import Faq from '../../home/components/Faq'
import InstallationService from '../../adminDashboard/components/InstallationService'
import SupportTicket from '../../adminDashboard/components/SupportTicket'
// import SupportTicket from '@/app/adminDashboard/components/SupportTicket'
// import InstallationService from '@/app/adminDashboard/components/InstallationService'
// import Faq from '@/app/home/components/Faq'
// import Pricing from '@/app/adminDashboard/components/Pricing'
// import Trusted from '@/app/adminDashboard/components/Trusted'
// import Testimonial from '@/app/adminDashboard/components/Testimonial'

const EcommerceOverview = () => {
  return (
    <div>
      <Banner />
      <ProductsFeature />
      <UniqueHomePages />
      <BuisnessOperate />
      <TrackingInfo />
      <ResponsiveLayout />
      <div className='sky-bg'>
        <Testimonial />
        <Trusted />
      </div>
      <Pricing />
      <div className='pt-[145px] mb-[122px]'>
        <Faq btncolor="#C52127" />
      </div>
      <InstallationService />
      <SupportTicket />
    </div>
  )
}

export default EcommerceOverview