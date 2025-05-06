' use client'
import React from 'react'
import Banner from '../components/Banner'
import BottomBanner from '../home/components/BottomBanner'
import AdminSlider from './components/CaseStudyBannerSlider'
import CaseStudylefttToRightSlider from './components/CaseStudylefttToRightSlider'
import CaseStudyRightToLeftSlider from './components/CaseStudyRightToLeftSlider'
import Portfolio from './components/Portfolio'
import CaseStudyBottomSlider from './components/CaseStudyBottomSlider'


const CaseStudy = () => {
  return (
    <div className='case_study'>
      <Banner title='Case Study' />
      <AdminSlider />
      <CaseStudylefttToRightSlider />
      <CaseStudyRightToLeftSlider />
      <Portfolio />
      <CaseStudyBottomSlider />
      <BottomBanner />
    </div>
  )
}

export default CaseStudy