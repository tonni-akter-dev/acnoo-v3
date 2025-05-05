import React from 'react'
import Pagination from "../purchase/components/pagination";
import SupportTable from './components/SupportTable';
import PageHeader from '../components/PageHeader';

const SupportTicket = () => {
  return (
    <div className="card border-0">
      <PageHeader button="#6021D" title="Support Ticket List" />
      <SupportTable />
      <Pagination />
    </div>
  )
}

export default SupportTicket