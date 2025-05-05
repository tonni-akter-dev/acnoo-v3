import Image from 'next/image'
import React from 'react'
import combined_shape from "/public/images/icons/Combined-Shape.svg";

const SearchInput = () => {
    return (
        <div className="table-search">
            <input
                type="text"
                name="search"
                className="form-control"
                placeholder="Search..."
            />
            <span className="lg:block hidden position-absolute">
                <Image src={combined_shape} alt="" className="img-fluid" />
            </span>
        </div>
    )
}

export default SearchInput