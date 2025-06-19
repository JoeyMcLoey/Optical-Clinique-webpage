import { Container, Flex, Box, ButtonGroup, Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import AppointmentModal from './AppointmentModal';
import ContactsModal from './ContactsModal';

const navbar = () => {
    const {
        isOpen: isContactsOpen,
        onOpen: onContactsOpen,
        onClose: onContactsClose,
    } = useDisclosure();

    const {
        isOpen: isAppointmentsOpen,
        onOpen: onAppointmentsOpen,
        onClose: onAppointmentsClose,
    } = useDisclosure();
  
    return (
    <Container maxW={"100%"}>
        <Flex
            h={10}
            justifyContent="space-between">
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
                <Button colorPalette="blue" rounded="full" onClick={onAppointmentsOpen}>Request Appointment</Button>
                <Button colorPalette="blue" rounded="full" onClick={onContactsOpen}>Order Contacts</Button>
            </ButtonGroup>
        </Flex>

        <AppointmentModal isOpen={isAppointmentsOpen} onClose={onAppointmentsClose} />
        <ContactsModal isOpen={isContactsOpen} onClose={onContactsClose} />
    </Container>
  )
}

export default navbar