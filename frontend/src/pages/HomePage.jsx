import { Box, Text, Button, Grid } from '@chakra-ui/react';
import React from 'react';
import { Image } from '@chakra-ui/react';
import OChomepage from '../components/images/OChomepage.jpg';
import eyeTest from '../components/images/1eyeTest.jpg';
import sunglass from '../components/images/2sunglass.jpg';
import variety from '../components/images/3variety.jpg';
import sEyeTest from '../components/images/Services-eyeTest.jpg';
import GFIndex from '../components/images/GFIndex.jpg';
import GFReflection from '../components/images/GFReflection.jpg';
import GFTransition from '../components/images/GFTransition.jpg';
import GFUV from '../components/images/GFUV.jpg';


const HomePage = () => {
  return (
    <Box shadow="md" margin="5" p="5" display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <Box p="5" display="flex" justifyContent="center" alignItems="center" flexDirection="column" padding="5" margin="5" width="100vw">
            <Text fontSize="5xl" fontWeight="semibold" marginBottom="5">
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
                <Box position="absolute" top="5px" right="5px" height="250px" width="300px" margin="5" borderRadius="lg" bg="rgba(255, 255, 255, 0.9)" display="flex" justifyContent="center" alignItems="center" flexDirection="column" p="10" textAlign="center">
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
                <Box position="absolute" top="5px" left="5px" height="250px" width="300px" margin="5" borderRadius="lg" bg="rgba(255, 255, 255, 0.9)" display="flex" justifyContent="center" alignItems="center" flexDirection="column" p="10" textAlign="center">
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
                <Box position="absolute" top="5px" right="5px" height="250px" width="300px" margin="5" borderRadius="lg" bg="rgba(255, 255, 255, 0.9)" display="flex" justifyContent="center" alignItems="center" flexDirection="column" p="10" textAlign="center">
                    <Text fontWeight="medium" fontSize="3xl" pb="5">
                        VAST RANGE OF FRAMES
                    </Text>
                    <Text fontSize="lg">
                        From fashion's latest, high-end brands to affordable styles
                    </Text>
                </Box>
            </Box>
        </Box>
        <Box id="services" scrollMarginTop="100px" mt="10">
            <Text fontWeight="bold" fontSize="3xl" color="rgb(14, 49, 176)" p="5" display="flex" justifyContent="center" marginBottom="10">
                OUR SERVICES
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
            <Box m="120px" p="5" shadow="md" display="flex" justifyContent="center">
                <Box width="50%" mr="40px">
                    <Text fontWeight="bold" fontSize="2xl">
                        WHEN WAS YOUR LAST EYE TEST?
                    </Text>
                    <Text fontSize="lg">
                        <br /> If you are over 40, we recommend an eye test to ensure that you do not have early signs of eye diseases such as glaucoma. <br />
                        <br /> Eye diseases in their early stages often have no noticeable symptoms. It is best to diagnose disease in its early stages to prevent permanent damage to your vision. <br />
                        <br /> At Optical Clinique, we routinely test for glaucoma, macula degeneration, cataracts and other eye conditions. <br />
                        <br /> Eye examinations are Bulk-billed to Medicare.
                    </Text>
                </Box>
                <Box width="45%">
                    <Image src={sEyeTest} borderRadius="xl"/>
                </Box>
            </Box>    
        </Box>
        <Box id="features" scrollMarginTop="100px" display="flex" justifyContent="center" flexDirection="column" textAlign="center">
            <Text fontWeight="bold" fontSize="3xl" color="rgb(14, 49, 176)" p="5" display="flex" justifyContent="center" marginBottom="10">
                GLASSES FEATURES
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap="5">
                <Box >
                    <Image src={GFIndex}/>
                    <Text mb="4" mt="4" fontWeight="bold" fontSize="2xl">HIGH INDEX LENSES</Text>
                    <Text fontSize="lg">Helps reduce the thickness and weight of your glasses by more than 50% making them look and feel better</Text>
                </Box>
                <Box >
                    <Image src={GFTransition} />
                    <Text  mb="4" mt="4" fontWeight="bold" fontSize="2xl">TRANSITION LENSES</Text>
                    <Text fontSize="lg">Light sensitive, shade changing lenses depending on UV light exposure, whilst offering 100% UV protection</Text>
                </Box>
                <Box >
                    <Image src={GFReflection} />
                    <Text  mb="4" mt="4" fontWeight="bold" fontSize="2xl">ANTI-REFLECTION</Text>
                    <Text fontSize="lg">Helps reduce light in situations like night driving or office work, whilst offering scratch resistance and a tougher lense</Text>
                </Box>
            </Grid>
            <Box m="100px" p="5" shadow="md" display="flex" justifyContent="center">
                <Box width="45%">
                    <Image src={GFUV} borderRadius="xl"/>
                </Box>
                <Box width="50%" ml="40px" textAlign="justify">
                    <Text fontWeight="bold" fontSize="2xl">
                        UV PROTECTION FOR EYES
                    </Text>
                    <Text fontSize="xl">
                        <br /> Living in Australia, we are always exposed to UV radiation. This also means that even in winter months our eyes are susceptible to damage from the sun and this can lead to a number of eye diseases. <br />
                        <br /> If you wear glasses, a pair of sunglasses can easily be made to your prescription. We feel very strongly about the importance of protecting your eyes throughout the year and for this reason we offer all Optical Clinique customers free UV protection on all lenses we dispense, even clear lenses. <br />
                    </Text>
                </Box>
            </Box> 
        </Box>
        <Box width="80vw" id="ourTeam" scrollMarginTop="100px" display="flex" justifyContent="center" flexDirection="column" textAlign="center" gap="80px">
            <Text fontWeight="bold" fontSize="3xl" color="rgb(14, 49, 176)" p="5" display="flex" justifyContent="center" marginBottom="10">
                MEET OUR TEAM
            </Text> 
            <Box display="flex" justifyContent="center" flexDirection="row">
                <Box width="50%" pl="5" pr="5">
                    {/* <Image /> */}
                    <Box bg="red" width="100%" height="100px"/>
                </Box>
                <Box width="50%" pl="5" pr="5">
                    <Text fontWeight="semibold" fontSize="xl">Our Optometrist</Text>
                    <Text fontSize="xl">Tony Fayed B. Optum (UNSW)</Text>
                    <Text fontSize="lg">  
                        <br /> Tony has over 20 years experience as an optometrist. He graduated from University of New South Wales in 1991and since then has been involved in Optometry practices in Sydney.<br />
                        <br /> His practices always utilise sophisticated and state of the art technology to help him provide the best and most efficient care for his patients.<br />
                        <br /> Tony is a well respected business owner in the community and strives to build relationships with his clientele.<br />
                        <br /> In his down time, Tony is a proud family man who loves to spend time with his wife and children.
                    </Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="row">
                <Box width="50%" pl="5" pr="5">
                    {/* <Image /> */}
                    <Box bg="red" width="100%" height="100px"/>
                </Box>
                <Box width="50%" pl="5" pr="5">
                    <Text fontWeight="semibold" fontSize="xl">Our Optometrist</Text>
                    <Text fontSize="xl">Tony Fayed B. Optum (UNSW)</Text>
                    <Text fontSize="lg">  
                        <br /> Tony has over 20 years experience as an optometrist. He graduated from University of New South Wales in 1991and since then has been involved in Optometry practices in Sydney.<br />
                        <br /> His practices always utilise sophisticated and state of the art technology to help him provide the best and most efficient care for his patients.<br />
                        <br /> Tony is a well respected business owner in the community and strives to build relationships with his clientele.<br />
                        <br /> In his down time, Tony is a proud family man who loves to spend time with his wife and children.
                    </Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="row">
                <Box width="50%" pl="5" pr="5">
                    {/* <Image /> */}
                    <Box bg="red" width="100%" height="100px"/>
                </Box>
                <Box width="50%" pl="5" pr="5">
                    <Text fontWeight="semibold" fontSize="xl">Our Practice Manager / Optical Dispenser</Text>
                    <Text fontSize="xl">Jennifer Borchan</Text>
                    <Text fontSize="lg">
                        <br />Jennifer has been working in the Optical field with Tony for 12 years.
                        <br />She utlises her warm and friendly personality to assist Tony in providing superior customer service, striving to build relationships with the clientele.
                        <br />She has gained a vast knowledge of the field and is able to assist with all of the clients needs; from a keen eye in frame selection to adjustments and repairs.
                        <br />Jennifer is alsoin charge of administration and marketing
                    </Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="row">
                <Box width="50%" pl="5" pr="5">
                    {/* <Image /> */}
                    <Box bg="red" width="100%" height="100px"/>
                </Box>
                <Box width="50%" pl="5" pr="5">
                    <Text fontWeight="semibold" fontSize="xl">Our Receptionist</Text>
                    <Text fontSize="xl">Receptionist name</Text>
                    <Text fontSize="lg">
                        <br />Blah
                        <br />Blah
                        <br />Blah
                        <br />Blah
                    </Text>
                </Box>
            </Box>
        </Box>
        <Box id="aboutUs" display="flex" justifyContent="center" flexDirection="column" textAlign="center" width="70vw" mb="80px">
            <Text fontWeight="bold" fontSize="3xl" color="rgb(14, 49, 176)" p="5" display="flex" justifyContent="center" marginBottom="10" marginTop="80px">
                ABOUT US
            </Text>
            <Box display="flex" justifyContent="space-between" shadow="md" p="20">
                <Box width="70%">
                    <Text fontWeight="bold" fontSize="2xl">LOCATION</Text>
                    <Text fontSize="lg" mb="5">254 MerryLands Road, Merrylands NSW 2160</Text>
                    <iframe
                        width="100%"
                        height="80%"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.0780685060263!2d150.98532428285392!3d-33.83609728102683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd326a965739%3A0xb2b438989056d813!2sOptical%20Clinique!5e0!3m2!1sen!2sau!4v1750223900472!5m2!1sen!2sau"
                        />
                </Box>
                <Box width="30%">
                    <Text fontWeight="bold" fontSize="2xl">CONTACT US</Text>
                    <Text fontSize="lg">
                        <br /> Phone: (02) 9637 9699
                        <br /> Fax: (02) 9637 6098
                    </Text>
                    <Text fontWeight="bold" fontSize="2xl"> <br />OPENING HOURS</Text>
                    <Text fontSize="lg">
                        <br /> Monday: 9am-5pm
                        <br /> Tuesday: 9am-5pm
                        <br /> Wednesday: 9am-5pm
                        <br /> Thursday: 9am-7pm
                        <br /> Friday: 9am-5pm
                        <br /> Saturday: CLOSED
                        <br /> Sunday: CLOSED
                    </Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default HomePage;