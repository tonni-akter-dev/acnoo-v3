import React from 'react'
import Pagination from "../purchase/components/pagination";
import DownloadTable from './components/DownloadTable';
import PageHeader from '../components/PageHeader';

const Downloads = () => {
  return (
    <div className="card border-0">
      <PageHeader title="Free Downloads" />
      <DownloadTable />
      <Pagination />
    </div>
  )
}

export default Downloads