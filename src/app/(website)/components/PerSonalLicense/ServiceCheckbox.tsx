import React from 'react'

const ServiceCheckbox = ({
    index,
    title,
    price,
    checked,
    onChange,
}: {
    index: number;
    title: string;
    price: number;
    checked: boolean;
    onChange: () => void;
}) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="relative flex items-center">
                    <input
                        type="checkbox"
                        id={`service-${index}`}
                        checked={checked}
                        onChange={onChange}
                        className="appearance-none h-4 w-4 border border-gray-300 rounded checked:bg-[#2353F5] checked:border-transparent"
                    />
                    <svg
                        className={`absolute w-3 h-3 text-white left-0.5 top-0.5 pointer-events-none ${checked ? 'block' : 'hidden'
                            }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <label htmlFor={`service-${index}`} className="font-medium text-[#000D2B]">
                    {title}
                </label>
            </div>
            <div>
                <span className="font-medium text-sm">${price}</span>
            </div>
        </div>
    )
}

export default ServiceCheckbox