import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Image } from '@chakra-ui/react';
import OChomepage from '../components/OChomepage.jpg';

const HomePage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" shadow="md" padding="5" margin="5">
        <Text textStyle="5xl" fontWeight="semibold" marginBottom="5">
            WELCOME TO OPTICAL CLINIQUE
        </Text>
        <Image src={OChomepage} alt="Optical Cinique home page" width="70%" height="400px" borderRadius="xl"/>
        <Box width="70%" display="flex" justifyContent="space-between">
            <Text margin="5">
                Optical Clinique Merrylands is an optometrist that is about more than just having your eyes tested.
            </Text> 
           <Text margin="5">
                We pride ourselves on being thorough and dedicated in looking after you and your eyes.
           </Text>
        </Box>
    </Box>
  )
}

export default HomePage