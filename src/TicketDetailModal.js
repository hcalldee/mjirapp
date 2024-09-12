import React from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

function TicketDetailModal({ show, ticket, onClose }) {
  return (
    <Modal show={show} size="lg" onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ticket Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            {/* Left Column */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nama Fitur</Form.Label>
                <Form.Control
                  type="text"
                  value={ticket.nama_fitur}
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Unit</Form.Label>
                <Form.Control
                  type="text"
                  value={ticket.unit}
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={ticket.Deskripsi}
                  readOnly
                />
              </Form.Group>
            </Col>

            {/* Right Column */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Assigner</Form.Label>
                <Form.Control
                  type="text"
                  value={ticket.assigner}
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Assigned</Form.Label>
                <Form.Control
                  type="text"
                  value={ticket.assigned}
                  readOnly
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tanggal Mulai</Form.Label>
                    <Form.Control
                      type="date"
                      value={ticket.start}
                      readOnly
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tanggal Selesai</Form.Label>
                    <Form.Control
                      type="date"
                      value={ticket.end}
                      readOnly
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
                      value={ticket.Priority}
                      disabled
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
                      value={ticket.Status}
                      disabled
                    >
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
                  value={ticket.Resource}
                  readOnly
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TicketDetailModal;
