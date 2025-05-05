import React from 'react'
import SearchBar from './SearchBar'
import DocumentationTab from './DocumentationTab'
import MobileDocumentation from './MobileDocumentation'

const DocumentationCompo = () => {
    return (
        <div>
            <SearchBar />
            <div className='lg:block hidden'>
                <DocumentationTab />
            </div>
            <div className='lg:hidden block'>
                <MobileDocumentation />
            </div>
        </div>
    )
}

export default DocumentationCompo