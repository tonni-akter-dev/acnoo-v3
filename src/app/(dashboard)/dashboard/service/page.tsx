import React from 'react'
import Pagination from "../purchase/components/pagination";
import ServiceTable from './components/ServiceTable';
import PageHeader from '../components/PageHeader';

const Service = () => {
  return (
    <div className="card border-0">
      <PageHeader title='Service' />
      <ServiceTable />
      <Pagination />
    </div>
  )
}

export default Service