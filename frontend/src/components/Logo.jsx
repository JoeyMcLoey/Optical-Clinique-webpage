import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { Image } from '@chakra-ui/react';
import OCLogo from './OCLogo.png';

const logo = () => {
    return (
        <Box display="flex" justifyContent="center" py="4">
            <Image src={OCLogo} alt="Optical Cinique logo" width="250px" height="100px" objectFit="contain"/>
        </Box>
    )
}

export default logo