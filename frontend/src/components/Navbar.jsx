import { Container, Flex, ButtonGroup, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import Modal from './Modal';
import appointmentImage from '../components/images/ModalApt.jpg';
import contactImage from '../components/images/ModalContacts.jpg';

const Navbar = () => {
  const [isAppointmentOpen, setAppointmentOpen] = useState(false);
  const [isContactsOpen, setContactsOpen] = useState(false);

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '8px',
    border: 'none',
    backgroundColor: '#0e31b0',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  const sendAppointment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    window.Email.send({
      SecureToken: "95311a0b-8f29-4725-8134-9dfe2839612f",
      To: "joseph.k20002@gmail.com",
      From: formData.get("email"),
      Subject: "New Appointment Request",
      Body: `
        <b>Full Name:</b> ${formData.get("name")}<br/>
        <b>Email:</b> ${formData.get("email")}<br/>
        <b>Phone:</b> ${formData.get("phone")}<br/>
        <b>Date:</b> ${formData.get("date")}<br/>
        <b>Time:</b> ${formData.get("time")}<br/>
        <b>Notes:</b> ${formData.get("notes") || "N/A"}
      `
    }).then(() => {
      setAppointmentOpen(false);
      alert("Appointment request sent successfully!");
    }).catch((error) => {
      console.error(error);
      alert("Failed to send appointment request. Please try again.");
    });
  };

  const sendContacts = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    window.Email.send({
      SecureToken: "95311a0b-8f29-4725-8134-9dfe2839612f",
      To: "joseph.k20002@gmail.com",
      From: formData.get("email"),
      Subject: "New Contact Lens Order",
      Body: `
        <b>Full Name:</b> ${formData.get("name")}<br/>
        <b>Email:</b> ${formData.get("email")}<br/>
        <b>Phone:</b> ${formData.get("phone")}<br/>
        <b>Supply Duration:</b> ${formData.get("supply")}<br/>
        <b>Notes:</b> ${formData.get("notes") || "N/A"}
      `
    }).then(() => {
      setContactsOpen(false);
      alert("Contact lens order sent successfully!");
    }).catch((error) => {
      console.error(error);
      alert("Failed to send contact lens order. Please try again.");
    });
  };

  return (
    <Container maxW="100%">
      <Flex h={10} justifyContent="space-between">
        <ButtonGroup ml="5" size="lg" variant="ghost" gap="5">
          <a href="#services"><Button colorScheme="blue">Our Services</Button></a>
          <a href="#features"><Button colorScheme="blue">Glasses Features</Button></a>
          <a href="#ourTeam"><Button colorScheme="blue">Our Team</Button></a>
          <a href="#aboutUs"><Button colorScheme="blue">About Us</Button></a>
        </ButtonGroup>
        <ButtonGroup size="lg" gap="5">
          <Button colorScheme="blue" rounded="full" onClick={() => setAppointmentOpen(true)}>Request Appointment</Button>
          <Button colorScheme="blue" rounded="full" onClick={() => setContactsOpen(true)}>Order Contacts</Button>
        </ButtonGroup>
      </Flex>

      {/* Appointment Modal */}
      <Modal isOpen={isAppointmentOpen} onClose={() => setAppointmentOpen(false)} backgroundImage={appointmentImage}>
        <h2 style={{ marginBottom: '40px', fontWeight: 'bold', fontSize: '20px' }}>Request Appointment</h2>
        <form onSubmit={sendAppointment}>
          <input name="name" style={inputStyle} type="text" placeholder="Full Name" required />
          <input name="email" style={inputStyle} type="email" placeholder="Email" required />
          <input name="phone" style={inputStyle} type="tel" placeholder="Phone Number" required />
          <input name="date" style={inputStyle} type="date" required />
          <input name="time" style={inputStyle} type="time" required />
          <textarea name="notes" style={inputStyle} rows="3" placeholder="Additional Notes (optional)" />
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </Modal>

      {/* Contacts Modal */}
      <Modal isOpen={isContactsOpen} onClose={() => setContactsOpen(false)} backgroundImage={contactImage}>
        <h2 style={{ marginBottom: '40px', fontWeight: 'bold', fontSize: '20px' }}>Order Contact Lenses</h2>
        <form onSubmit={sendContacts}>
          <input name="name" style={inputStyle} type="text" placeholder="Full Name" required />
          <input name="email" style={inputStyle} type="email" placeholder="Email" required />
          <input name="phone" style={inputStyle} type="tel" placeholder="Phone Number" required />
          <select name="supply" style={inputStyle} required>
            <option value="" disabled>Select supply</option>
            <option value="3-month">3 month</option>
            <option value="6-month">6 month</option>
            <option value="12-month">12 month</option>
          </select>
          <textarea name="notes" style={inputStyle} rows="3" placeholder="Additional Notes (optional)" />
          <button type="submit" style={buttonStyle}>Request Order</button>
        </form>
      </Modal>
    </Container>
  );
};

export default Navbar;
