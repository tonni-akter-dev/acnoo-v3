import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

type IBanner ={
    title:string
}
const Banner:React.FC<IBanner> = ({title}) => {
    return (
        <div className="service service-bg py-4 lg:py-16">
            <div className="container max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 text-left">
                <h1 className="text-base md:text-lg lg:text-6xl font-bold text-primary mb-1 lg:mb-3.5">
                    {title}
                </h1>
                <Breadcrumb />
            </div>   
        </div>
    );
};

export default Banner;
