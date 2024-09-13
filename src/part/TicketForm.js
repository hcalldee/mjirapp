import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function TicketForm({ formData, onChange, onSubmit, onClose }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Row>
        {/* Left Column */}
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Nama Fitur</Form.Label>
            <Form.Control
              type="text"
              name="nama_fitur"
              value={formData.nama_fitur}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Unit</Form.Label>
            <Form.Control
              type="text"
              name="unit"
              value={formData.unit}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="Deskripsi"
              value={formData.Deskripsi}
              onChange={onChange}
            />
          </Form.Group>
        </Col>

        {/* Right Column */}
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Assigner</Form.Label>
            <Form.Control
              type="text"
              name="assigner"
              value={formData.assigner}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Assigned</Form.Label>
            <Form.Control
              type="text"
              name="assigned"
              value={formData.assigned}
              onChange={onChange}
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tanggal Mulai</Form.Label>
                <Form.Control
                  type="date"
                  name="start"
                  value={formData.start}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tanggal Selesai</Form.Label>
                <Form.Control
                  type="date"
                  name="end"
                  value={formData.end}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Priority</Form.Label>
                <Form.Control
                  as="select"
                  name="Priority"
                  value={formData.Priority}
                  onChange={onChange}
                >
                  <option value="Sangat Tinggi">Sangat Tinggi</option>
                  <option value="Tinggi">Tinggi</option>
                  <option value="Sedang">Sedang</option>
                  <option value="Rendah">Rendah</option>
                  <option value="Sangat Rendah">Sangat Rendah</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  name="Status"
                  value={formData.Status}
                  onChange={onChange}
                >
                  <option value="">Pilih Status</option>
                  <option value="Ready">Ready</option>
                  <option value="WIP">WIP</option>
                  <option value="Testing">Testing</option>
                  <option value="Deploy">Deploy</option>
                  <option value="End">End</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Resource</Form.Label>
            <Form.Control
              type="text"
              name="Resource"
              value={formData.Resource}
              onChange={onChange}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Hidden field for ID Ticket */}
      <Form.Control
        type="hidden"
        name="id_ticket"
        value={formData.id_ticket}
        onChange={onChange}
      />

      <Button variant="primary" type="submit">
        {formData.id_ticket ? 'Update Ticket' : 'Add Ticket'}
      </Button>
      <Button variant="secondary" onClick={onClose} className="ms-2">Close</Button>
    </Form>
  );
}

export default TicketForm;
