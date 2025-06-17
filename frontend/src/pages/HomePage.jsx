import { Box, Text, Button, Grid } from '@chakra-ui/react';
import React from 'react';
import { Image } from '@chakra-ui/react';
import OChomepage from '../components/images/OChomepage.jpg';
import eyeTest from '../components/images/1eyeTest.jpg';
import sunglass from '../components/images/2sunglass.jpg';
import variety from '../components/images/3variety.jpg';

const HomePage = () => {
  return (
    <Box shadow="md" margin="5" p="5" display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <Box p="5" display="flex" justifyContent="center" alignItems="center" flexDirection="column" padding="5" margin="5" width="100vw">
            <Text textStyle="5xl" fontWeight="semibold" marginBottom="5">
                WELCOME TO OPTICAL CLINIQUE
            </Text>
            <Image src={OChomepage} alt="Optical Cinique home page" width="70%" height="400px" borderRadius="xl"/>
            <Box width="70%" p="5" display="flex" justifyContent="space-between">
                <Box margin="10">
                    <Text fontWeight="bold" fontSize="lg">
                        Optical Clinique Merrylands
                    </Text> 
                    <Text>
                        is an optometrist that is about more than just having your eyes tested.
                    </Text>
                </Box>
                <Box margin="10">
                    <Text fontWeight="bold" fontSize="lg">
                            We pride ourselves
                    </Text>
                    <Text>
                            on being thorough and dedicated in looking after you and your eyes.
                    </Text>
                </Box>
            </Box>
        </Box>
        <Box p="5" display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="100vw">
            <Box position="relative" margin="5">
                <Image src={eyeTest} width="1200px" height="300px" borderRadius="xl" objectFit="cover"/>
                <Box position="absolute" top="5px" right="5px" height="250px" width="300px" margin="5" borderRadius="lg" bg="rgba(255, 255, 255, 0.9)" p="5" display="flex" justifyContent="center" alignItems="center" flexDirection="column" p="10" textAlign="center">
                    <Text fontWeight="medium" fontSize="3xl" pb="5">
                        SOPHISTICATED EQUIPMENT
                    </Text>
                    <Text fontSize="lg">
                        Ensures that you have the most complete eye examination
                    </Text>
                </Box>
            </Box>
            <Box position="relative" margin="5">
                <Image src={sunglass} width="1200px" height="300px" borderRadius="xl"/>
                <Box position="absolute" top="5px" left="5px" height="250px" width="300px" margin="5" borderRadius="lg" bg="rgba(255, 255, 255, 0.9)" p="5" display="flex" justifyContent="center" alignItems="center" flexDirection="column" p="10" textAlign="center">
                    <Text fontWeight="medium" fontSize="3xl" pb="5">
                        UP-TO-DATE STYLES
                    </Text>
                    <Text fontSize="lg">
                        In both spectacles and sunglasses
                    </Text>
                </Box>
            </Box>
            <Box position="relative" margin="5">
                <Image src={variety} width="1200px" height="300px" borderRadius="xl"/>
                <Box position="absolute" top="5px" right="5px" height="250px" width="300px" margin="5" borderRadius="lg" bg="rgba(255, 255, 255, 0.9)" p="5" display="flex" justifyContent="center" alignItems="center" flexDirection="column" p="10" textAlign="center">
                    <Text fontWeight="medium" fontSize="3xl" pb="5">
                        VAST RANGE OF FRAMES
                    </Text>
                    <Text fontSize="lg">
                        From fashion's latest, high-end brands to affordable styles
                    </Text>
                </Box>
            </Box>
        </Box>
        <Box id="services" marginTop="10">
            <Text fontWeight="bold" fontSize="3xl" color="rgb(14, 49, 176)" p="5" display="flex" justifyContent="center" marginBottom="10">
                Our Services
            </Text>
            <Box width="100vw" pl="40" pr="40">
                <Grid templateColumns="repeat(3, 1fr)" gap="5">
                    <Box _hover={{ transform: 'scale(1.05)', transition: 'all 0.15s ease-in-out' }} p="10" display="flex" justifyContent="center" alignItems="center" borderRadius="xl" shadow="md">
                        <Text fontSize="lg">Vision screenings</Text>
                    </Box>
                    <Box _hover={{ transform: 'scale(1.05)', transition: 'all 0.15s ease-in-out' }} p="10" display="flex" justifyContent="center" alignItems="center" borderRadius="xl" shadow="md">
                        <Text fontSize="lg">Diabetic eye examinations</Text>
                    </Box>
                    <Box _hover={{ transform: 'scale(1.05)', transition: 'all 0.15s ease-in-out' }} p="10" display="flex" justifyContent="center" alignItems="center" borderRadius="xl" shadow="md">
                        <Text fontSize="lg">Visual fields tests</Text>
                    </Box>
                    <Box _hover={{ transform: 'scale(1.05)', transition: 'all 0.15s ease-in-out' }} p="10" display="flex" justifyContent="center" alignItems="center" borderRadius="xl" shadow="md">
                        <Text fontSize="lg">Children's eye examinations</Text>
                    </Box>
                    <Box _hover={{ transform: 'scale(1.05)', transition: 'all 0.15s ease-in-out' }} p="10" display="flex" justifyContent="center" alignItems="center" borderRadius="xl" shadow="md">
                        <Text fontSize="lg">Glaucoma testing</Text>
                    </Box>
                    <Box _hover={{ transform: 'scale(1.05)', transition: 'all 0.15s ease-in-out' }} p="10" display="flex" justifyContent="center" alignItems="center" borderRadius="xl" shadow="md">
                        <Text fontSize="lg">Macula Degeneration screening</Text>
                    </Box>
                    <Box _hover={{ transform: 'scale(1.05)', transition: 'all 0.15s ease-in-out' }} p="10" display="flex" justifyContent="center" alignItems="center" borderRadius="xl" shadow="md">
                        <Text fontSize="lg">Retinal photography</Text>
                    </Box>
                    <Box _hover={{ transform: 'scale(1.05)', transition: 'all 0.15s ease-in-out' }} p="10" display="flex" justifyContent="center" alignItems="center" borderRadius="xl" shadow="md">
                        <Text fontSize="lg">Latest contact lenses and solutions</Text>
                    </Box>
                    <Box _hover={{ transform: 'scale(1.05)', transition: 'all 0.15s ease-in-out' }} p="10" display="flex" justifyContent="center" alignItems="center" borderRadius="xl" shadow="md">
                        <Text fontSize="lg">Spectacle repairs and adjustments</Text>
                    </Box>
                </Grid>
            </Box>
        </Box>
    </Box>
  )
}

export default HomePage