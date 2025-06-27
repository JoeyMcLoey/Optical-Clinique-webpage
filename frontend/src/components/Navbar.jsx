import { Container, Flex, Box, ButtonGroup, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import Modal from './Modal';

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

  return (
    <Container maxW={"100%"}>
        <Flex h={10} justifyContent="space-between">
            <ButtonGroup ml="5" size="lg" variant="ghost" gap="5">
                <a href="#services" style={{ scrollBehavior: 'smooth' }}>
                    <Button colorPalette="blue">Our Services</Button>
                </a>
                <a href="#features" style={{ scrollBehavior: 'smooth' }}>
                    <Button colorPalette="blue">Glasses Features</Button>
                </a>
                <a href="#ourTeam" style={{ scrollBehavior: 'smooth' }}>
                    <Button colorPalette="blue">Our Team</Button>
                </a>
                <a href="#aboutUs" style={{ scrollBehavior: 'smooth' }}> 
                    <Button colorPalette="blue">About Us</Button>
                </a>
            </ButtonGroup>
            <ButtonGroup size="lg" gap="5">
                <Button colorPalette="blue" rounded="full" onClick={() => setAppointmentOpen(true)}>Request Appointment</Button>
                <Button colorPalette="blue" rounded="full" onClick={() => setContactsOpen(true)}>Order Contacts</Button>
            </ButtonGroup>
        </Flex>

        {/* Appointment Modal */}
        <Modal isOpen={isAppointmentOpen} onClose={() => setAppointmentOpen(false)} backgroundImage="/images/appointment.jpg">
          <h2 style={{ marginBottom: '40px', fontWeight: 'bold', fontSize: '20px'  }}>Request Appointment</h2>
          <form>
            <input style={inputStyle} type="text" placeholder="Full Name" />
            <input style={inputStyle} type="email" placeholder="Email" />
            <input style={inputStyle} type="tel" placeholder="Phone Number" />
            <input style={inputStyle} type="date" />
            <textarea style={inputStyle} rows="3" placeholder="Additional Notes (optional)" />
            <button type="submit" style={buttonStyle}>Submit</button>
          </form>
        </Modal>

        {/* Contacts Modal */}
        <Modal isOpen={isContactsOpen} onClose={() => setContactsOpen(false)} backgroundImage="/images/contacts.jpg">
          <h2 style={{ marginBottom: '40px', fontWeight: 'bold', fontSize: '20px' }}>Order Contact Lenses</h2>
          <form>
            <input style={inputStyle} type="text" placeholder="Full Name" />
            <input style={inputStyle} type="email" placeholder="Email" />
            <input style={inputStyle} type="tel" placeholder="Phone Number" />
            <select style={inputStyle} defaultValue="">
              <option value="" disabled>Select supply</option>
              <option value="3-month">3 month</option>
              <option value="6-month">6 month</option>
              <option value="12-month">12 month</option>
            </select>
            <textarea style={inputStyle} rows="3" placeholder="Additional Notes (optional)" />
            <button type="submit" style={buttonStyle}>Request Order</button>
          </form>
        </Modal>
    </Container>
  )
}

export default Navbar;