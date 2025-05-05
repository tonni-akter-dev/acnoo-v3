import React from 'react'
import Hero from './Hero'
import CountClients from './CountClients'
import ProductsFeature from './ProductsFeature'
import ResponsiveRetina from './ResponsiveRetina'
import AcceptedPaymen from './AcceptedPaymen'
import ResourcePlannning from './ResourcePlannning'
import BuisnessNeeds from './BuisnessNeeds'
import AppScreen from './AppScreen'
import Compatible from './Compatible'
import Support from './Support'
import Testimonial from './Testimonial'
import Trusted from './Trusted'
import Pricing from './Pricing'
import InstallationService from './InstallationService'
import SupportTicket from './SupportTicket'
import GloballyGrowth from '../../home/components/GloballyGrowth'
import Faq from '../../home/components/Faq'

const Overview = () => {
  return (
    <div>
      <Hero />
      <CountClients />
      <ProductsFeature />
      <GloballyGrowth text="Something new coming soon!" color="#C52127" />
      <ResponsiveRetina />
      <AcceptedPaymen />
      <ResourcePlannning />
      <BuisnessNeeds />
      <AppScreen />
      <Compatible />
      <Support />
      <div className='sky-bg'>
        <Testimonial />
        <Trusted />
      </div>
      <Pricing />
      <div className='pt-[145px] mb-[122px]'>
        <Faq btncolor="#C52127" />
      </div>
      <InstallationService />
      <SupportTicket/>
    </div>
  )
}

export default Overview