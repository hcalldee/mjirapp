import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from './part/axiosConfig'; // Import the custom axios instance
import { Container, Button, Modal } from 'react-bootstrap';
import TicketForm from './part/TicketForm';
import TicketTable from './part/TicketTable';
import TicketDetailModal from './part/TicketDetailModal'; // Import the new detail modal
import { v4 as uuidv4 } from 'uuid'; // For generating UUID

function App() {
  const [tickets, setTickets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false); // State for detail modal
  const [loadingActivity, setLoadingActivity] = useState(false); // State for activity loading
  const [formData, setFormData] = useState({
    id_ticket: '', // hidden field with UUID
    nama_fitur: '',
    unit: '',
    assigner: '',
    assigned: '',
    Deskripsi: '',
    start: '',
    end: '',
    Priority: '',
    Resource: '',
    Status: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null); // State for selected ticket in detail modal

  // Fetch tickets data from API
  const fetchTickets = async () => {
    try {
      const response = await api.get('/tickets');
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  // Handle form submit (create or update)
  const handleSubmit = async (data) => {
    try {
      if (editMode) {
        // Update ticket
        await api.put(`/tickets/${data.id_ticket}`, data);
      } else {
        // Create new ticket
        data.id_ticket = uuidv4(); // Generate UUID when creating a new ticket
        await api.post('/tickets', data);
      }
      fetchTickets();
      setShowModal(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEdit = (ticket) => {
    // Ensure date is formatted correctly, considering possible timezone shifts
    const formatDate = (date) => {
      if (!date) return '';
      const dateObj = new Date(date);
      // Extract date part only
      return dateObj.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    };

    setFormData({
      id_ticket: ticket.id_ticket || '',
      nama_fitur: ticket.nama_fitur || '',
      unit: ticket.unit || '',
      assigner: ticket.assigner || '',
      assigned: ticket.assigned || '',
      Deskripsi: ticket.Deskripsi || '',
      start: formatDate(ticket.start), // Correctly format date to YYYY-MM-DD
      end: formatDate(ticket.end), // Correctly format date to YYYY-MM-DD
      Priority: ticket.Priority || '',
      Resource: ticket.Resource || '',
      Status: ticket.Status || ''
    });
    setEditMode(true);
    setShowModal(true);
  };

  // Handle delete
  const handleDelete = async (id_ticket) => {
    try {
      await api.delete(`/tickets/${id_ticket}`);
      fetchTickets();
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  const handleAddActivity = async (id_ticket) => {
    setLoadingActivity(true); // Start loading
    try {
      await api.post('/daily-log', { ticketId: id_ticket });
      fetchTickets(); // Refresh the ticket list after adding activity
      toast.success('Activity added successfully!', { position: "top-right" });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          toast.error('Invalid input for adding activity.', { position: "top-right" });
        } else if (error.response.status === 500) {
          toast.error('Server error, please try again later.', { position: "top-right" });
        }
      } else {
        toast.error('An unexpected error occurred.', { position: "top-right" });
      }
    } finally {
      setLoadingActivity(false); // Stop loading
    }
  };
  

  // Show modal for adding new ticket
  const handleAddNew = () => {
    setFormData({
      id_ticket: '',
      nama_fitur: '',
      unit: '',
      assigner: 'Qhusnul Arienda',
      assigned: '',
      Deskripsi: 'Sesuaikan Dengan Dokumen Requirement',
      start: '',
      end: '',
      Priority: '',
      Resource: '',
      Status: ''
    });
    setEditMode(false);
    setShowModal(true);
  };

  // Show detail modal
  const handleViewDetail = (ticket) => {
    setSelectedTicket(ticket);
    setShowDetailModal(true);
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
    setSelectedTicket(null);
  };

  return (
    <Container>

      <h1 className="my-4">Mini Jira App</h1>
      <Button onClick={handleAddNew} className="mb-3">Add New Ticket</Button>
      <TicketTable 
        tickets={tickets} 
        onEdit={handleEdit} 
        onDelete={handleDelete}
        onViewDetail={handleViewDetail} // Pass function to view details
        addActivity={handleAddActivity}
      />

      {/* Modal for adding/editing ticket */}
      <Modal show={showModal} size="lg" onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit Ticket' : 'Add New Ticket'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TicketForm
            formData={formData}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            onSubmit={handleSubmit}
            onClose={() => setShowModal(false)}
          />
        </Modal.Body>
      </Modal>

      {/* Modal for viewing ticket details */}
      {selectedTicket && (
        <TicketDetailModal
          show={showDetailModal}
          ticket={selectedTicket}
          onClose={closeDetailModal}
        />
      )}
      <ToastContainer />
    </Container>
  );
}

export default App;
