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
import InstallationService from '../../adminDashboard/components/InstallationService'
import SupportTicket from '../../adminDashboard/components/SupportTicket'
import Faq from '@/app/(website)/home/components/Faq'

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
        <Testimonial color="#7500FE" />
        <Trusted />
      </div>
      <Pricing color="#7500FE" />
      <div className='pt-6 md:pt-[30px] lg:pt-[145px] mb-8 lg:mb-[122px]'>
        <Faq color="#7500FE" btncolor="#C52127" />
      </div>
      <InstallationService color="#7500FE" />
      <SupportTicket />
    </div>
  )
}

export default EcommerceOverview