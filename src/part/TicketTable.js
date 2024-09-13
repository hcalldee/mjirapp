import React from 'react';
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';

import { truncateId, priorityBadge, statusBadge, sisaHari, statusBadge2 } from './utils'; // Import functions

const columns = (onViewDetail, onEdit, onDelete, handleOpenResource) => [
  {
    name: 'ID Ticket',
    selector: row => truncateId(row.id_ticket),
    sortable: true,
    style: { width: '5px' }, // Set width as a percentage
  },
  {
    name: 'Nama Fitur',
    selector: row => row.nama_fitur,
    sortable: true,
    style: { width: '25%' }, // Set width as a percentage
  },
  {
    name: 'Assigned To',
    selector: row => row.assigned,
    sortable: true,
    style: { width: '15%' }, // Set width as a percentage
  },
  {
    name: 'Sisa Hari',
    cell: row => {
      const countSisaHari = sisaHari(row.end); // Calculate remaining days
      return statusBadge2(countSisaHari); // Display badge based on remaining days
    },
    sortable: true,
    style: { width: '10%' }, // Set width as a percentage
  },
  {
    name: 'Priority',
    cell: row => priorityBadge(row.Priority),
    sortable: true,
    style: { width: '10%' }, // Set width as a percentage
  },
  {
    name: 'Status',
    cell: row => statusBadge(row.Status),
    sortable: true,
    style: { width: '10%' }, // Set width as a percentage
  },
  {
    name: 'Action',
    cell:  row => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <Button className="small-text-button" variant="info" onClick={() => onViewDetail(row)} size="sm" block>Detail</Button>
          <Button 
            className="small-text-button"
            variant="success" 
            onClick={() => handleOpenResource(row.Resource)} 
            size="sm"
            block
            disabled={!row.Resource}
          >
            Resource
          </Button>
          <Button className="small-text-button" variant="warning" onClick={() => onEdit(row)} size="sm" block>Edit</Button>
          <Button className="small-text-button" variant="danger" onClick={() => onDelete(row.id_ticket)} size="sm" block>Delete</Button>
        </div>
      ),
      style: { width: '15%' }, // Adjust width as needed
  }
];

function TicketTable({ tickets, onEdit, onDelete, onViewDetail }) {
  const handleOpenResource = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div style={{ overflowX: 'auto' }}> {/* Ensure table container can scroll horizontally if needed */}
      <DataTable
        columns={columns(onViewDetail, onEdit, onDelete, handleOpenResource)}
        data={tickets}
        pagination
        paginationPerPage={5}  // Set rows per page to 5
        highlightOnHover
        pointerOnHover
        dense
        responsive  // Make the table responsive
      />
    </div>
  );
}

export default TicketTable;
