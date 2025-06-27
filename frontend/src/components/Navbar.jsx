import { Container, Flex, Box, ButtonGroup, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import Modal from './Modal';
import appointmentImage from '../components/images/ModalApt.jpg';
import contactImage from '../components/images/ModalContacts.jpg';
import emailjs from 'emailjs-com';

const Navbar = () => {
  const [isAppointmentOpen, setAppointmentOpen] = useState(false);
  const [isContactsOpen, setContactsOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

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
    emailjs.sendForm(
      'service_339kk4r',
      'template_hz2hyle',
      e.target,
      'VhMpQcXD1gLtYDeCq'
    ).then(() => {
      setAppointmentOpen(false);
      alert("Appointment request sent successfully!");
    }).catch((error) => {
      alert("Failed to send appointment request. Please try again.");
      console.error(error);
    });
  };

  const sendContacts = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_339kk4r',
      'template_v6ariif',
      e.target,
      'VhMpQcXD1gLtYDeCq'
    ).then(() => {
      setContactsOpen(false);
      alert("Contact lens order request sent successfully!");
    }).catch((error) => {
      alert("Failed to send contact lens order request. Please try again.");
      console.error(error);
    });
  };

  return (
    <Container maxW={"100%"}>
      <Flex h={10} justifyContent="space-between">
        <ButtonGroup ml="5" size="lg" variant="ghost" gap="5">
          <a href="#services" style={{ scrollBehavior: 'smooth' }}>
            <Button colorScheme="blue">Our Services</Button>
          </a>
          <a href="#features" style={{ scrollBehavior: 'smooth' }}>
            <Button colorScheme="blue">Glasses Features</Button>
          </a>
          <a href="#ourTeam" style={{ scrollBehavior: 'smooth' }}>
            <Button colorScheme="blue">Our Team</Button>
          </a>
          <a href="#aboutUs" style={{ scrollBehavior: 'smooth' }}>
            <Button colorScheme="blue">About Us</Button>
          </a>
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
