import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

const navbar = () => {
  return (
    <Container maxW={"100px"}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            NAVBAR
        </Flex>
    </Container>
  )
}

export default navbar