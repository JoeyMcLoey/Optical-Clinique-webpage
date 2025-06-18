import { Container, Flex, Box, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'

const navbar = () => {
  return (
    <Container maxW={"100%"}>
        <Flex
            h={10}
            justifyContent="space-between"
            
        >
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
                <Button colorPalette="blue">About Us</Button>
            </ButtonGroup>
            <ButtonGroup size="lg" gap="5">
                <Button colorPalette="blue" rounded="full">Request Appointment</Button>
                <Button colorPalette="blue" rounded="full">Order Contacts</Button>
            </ButtonGroup>
        </Flex>
    </Container>
  )
}

export default navbar