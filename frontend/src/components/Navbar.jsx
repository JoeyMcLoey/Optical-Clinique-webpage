import { Container, Flex, Box, ButtonGroup, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import Modal from './Modal';

const Navbar = () => {      
  const [isAppointmentOpen, setAppointmentOpen] = useState(false);
  const [isContactsOpen, setContactsOpen] = useState(false);
  
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
        <Modal isOpen={isAppointmentOpen} onClose={() => setAppointmentOpen(false)}>
          <h2>Request Appointment</h2>
          <p>Please call (02) 9637 9699 or visit us in-store to request an appointment.</p>
        </Modal>

        {/* Contacts Modal */}
        <Modal isOpen={isContactsOpen} onClose={() => setContactsOpen(false)}>
          <h2>Order Contacts</h2>
          <p>To order contacts, please call (02) 9637 9699 or visit our clinic.</p>
        </Modal>
    </Container>
  )
}

export default Navbar;