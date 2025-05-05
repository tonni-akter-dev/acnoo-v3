import React from 'react'
import Banner from '../components/Banner'
import Testimonials from './components/Testimonials'
import BottomBanner from '../home/components/BottomBanner'

const Testimonial = () => {
    return (
        <div>
            <Banner title='Testimonial' />
            <Testimonials />
            <BottomBanner />
        </div>
    )
}

export default Testimonial