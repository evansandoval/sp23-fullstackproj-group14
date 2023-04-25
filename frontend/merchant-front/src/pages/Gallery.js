import DesignGallery from "../components/DesignGallery";
import { Box, Image, Link, Text, Stack, Button, ChakraProvider } from "@chakra-ui/react";

function Gallery() {
    return (
        <ChakraProvider>
            <Stack align='center' spacing={4} direction='row' bg='#111111' h='60px' pl='30px'>
                <Link href='/'><Image src='/logo.png' alt='Merchant Logo' w='36px'></Image></Link>
                <Link href='/Gallery'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Gallery</Button></Link>
                <Link href='/VotingPage'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Vote</Button></Link>
                <Link href='/DesignUpload'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Upload</Button></Link>
                <Link href='/Login'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Login</Button></Link>
            </Stack>
            <Box bg='#E0DDD5'>
                <Stack direction='column' align='center' spacing={3}> 
                    <Image src='/taylor-evermore.png' alt='Taylor Swift Folklore Photo' width='100%' fallbackSrc='https://via.placeholder.com/500' />
                    <Text as='b' fontSize='50px' color='black' lineHeight='1.2' pt='20px'>Ongoing Contest (1/1 - 1/31)</Text>
                    <Stack direction='column' align='center' spacing={3} pt='20px' pb='60px'>
                        <Link href='/VotingPage'>
                            <Button bg='#111111' variant='solid' size='lg' textColor='#E0DDD5' borderRadius='0px' px='40px' _hover={{ opacity: '40%' }}>
                                VOTE NOW
                            </Button>
                        </Link>
                        <Link href='/DesignUpload'>
                            <Button border='2px' borderColor='#111111' bg='#E0DDD5' variant='solid' size='lg' textColor='#111111' borderRadius='0px' px='40px' _hover={{ color: 'black', opacity: '30%' }}>
                                UPLOAD DESIGN
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Box>                    
            <Box bg='black' overflow='auto' px='70px'>
                <DesignGallery />
            </Box>
        </ChakraProvider>
    );
}

export default Gallery;