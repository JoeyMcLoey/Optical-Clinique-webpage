import { Container, Flex, Box, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'

const navbar = () => {
  return (
    <Container maxW={"100%"}>
        <Flex
            h={10}
            justifyContent="space-between"
            
        >
            <ButtonGroup size="lg" variant="ghost" gap="10">
                <Button colorPalette="blue">Our Services</Button>
                <Button colorPalette="blue">Glasses Features</Button>
                <Button colorPalette="blue">Our Team</Button>
                <Button colorPalette="blue">About Us</Button>
            </ButtonGroup>
            <ButtonGroup size="lg" gap="5">
                <Button colorPalette="blue">Request Appointment</Button>
                <Button colorPalette="blue">Order Contacts</Button>
            </ButtonGroup>
        </Flex>
    </Container>
  )
}

export default navbar