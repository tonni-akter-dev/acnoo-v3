import React, { useState } from 'react'
import ServiceCheckbox from './ServiceCheckbox'
const services = [
    { title: 'Get 6 More Months Of Support And Save', price: 27, checked: true },
    { title: 'Installation, Setup and Customization Package', price: 29 },
    { title: 'All-in-One Customization', price: 29 },
    { title: 'Installation and Customization Package', price: 29 },
]
const RecommendSerice = () => {
    const [checkedServices, setCheckedServices] = useState(
        services.map((service) => service.checked || false)
    );

    const toggleService = (index: number) => {
        const newCheckedServices = [...checkedServices];
        newCheckedServices[index] = !newCheckedServices[index];
        setCheckedServices(newCheckedServices);
    };

    return (
        <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">Recommended Services</h3>
            <div className="space-y-3">
                {services.map((service, index) => (
                    <ServiceCheckbox
                        key={index}
                        index={index}
                        title={service.title}
                        price={service.price}
                        checked={checkedServices[index]}
                        onChange={() => toggleService(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecommendSerice