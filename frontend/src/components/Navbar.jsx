import { Container, Flex, ButtonGroup, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import appointmentImage from '../components/images/ModalApt.jpg';
import contactImage from '../components/images/ModalContacts.jpg';
import emailjs from '@emailjs/browser';

const PUBLIC_KEY = 'VhMpQcXD1gLtYDeCq';
const SERVICE_ID_APT = 'service_ez7dbtb';
const TEMPLATE_APT = 'template_hz2hyle';
const SERVICE_ID_CONTACTS = 'service_ez7dbtb';
const TEMPLATE_CONTACTS = 'template_v6ariif';

const Navbar = () => {
  const [isAppointmentOpen, setAppointmentOpen] = useState(false);
  const [isContactsOpen, setContactsOpen] = useState(false);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

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

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const params = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      date: form.date.value,
      time: form.time.value,
      notes: form.notes.value,
    };
    try {
      await emailjs.send(SERVICE_ID_APT, TEMPLATE_APT, params);
      alert('Appointment request sent!');
      setAppointmentOpen(false);
    } catch (err) {
      console.error(err);
      alert('Failed to send. Please try again.');
    }
  };

  const handleContactsSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const params = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      supply: form.supply.value,
      notes: form.notes.value,
    };
    try {
      await emailjs.send(SERVICE_ID_CONTACTS, TEMPLATE_CONTACTS, params);
      alert('Contact lens order request sent!');
      setContactsOpen(false);
    } catch (err) {
      console.error(err);
      alert('Failed to send. Please try again.');
    }
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
        <form onSubmit={handleAppointmentSubmit}>
          <input name="name" id="name" style={inputStyle} type="text" placeholder="Full Name" required />
          <input name="email" id="email" style={inputStyle} type="email" placeholder="Email" required />
          <input name="phone" id="phone" style={inputStyle} type="tel" placeholder="Phone Number" required />
          <input name="date" id="date" style={inputStyle} type="date" required />
          <input name="time" id="time" style={inputStyle} type="time" required />
          <textarea name="notes" style={inputStyle} rows="3" placeholder="Additional Notes (optional)" />
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </Modal>

      {/* Contacts Modal */}
      <Modal isOpen={isContactsOpen} onClose={() => setContactsOpen(false)} backgroundImage={contactImage}>
        <h2 style={{ marginBottom: '40px', fontWeight: 'bold', fontSize: '20px' }}>Order Contact Lenses</h2>
        <form onSubmit={handleContactsSubmit}>
          <input name="name" id="name" style={inputStyle} type="text" placeholder="Full Name" required />
          <input name="email" id="email" style={inputStyle} type="email" placeholder="Email" required />
          <input name="phone" id="phone" style={inputStyle} type="tel" placeholder="Phone Number" required />
          <select name="supply" id="supply" style={inputStyle} required>
            <option value="" disabled>Select supply</option>
            <option value="3-month">3 month</option>
            <option value="6-month">6 month</option>
            <option value="12-month">12 month</option>
          </select>
          <textarea name="notes" id="notes" style={inputStyle} rows="3" placeholder="Additional Notes (optional)" />
          <button type="submit" style={buttonStyle}>Request Order</button>
        </form>
      </Modal>
    </Container>
  );
};

export default Navbar;
