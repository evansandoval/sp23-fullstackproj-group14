import DesignGallery from "../components/DesignGallery";
import Design from "../components/Design";
import { Box, Image, Link, Text, Stack, Button, ChakraProvider } from "@chakra-ui/react";

function Gallery() {
    return (
        <ChakraProvider>
            <Box bg='#E0DDD5' overflow='auto'>
                <Stack direction='column' align='center' spacing={3}> 
                    <Image src='/taylor-evermore.png' alt='Taylor Swift Folklore Photo' width='100%' fallbackSrc='https://via.placeholder.com/500' />
                    <Text as='b' fontSize='50px' color='black' lineHeight='1.2' pt='20px'>Ongoing Contest (1/1 - 1/31)</Text>
                    <Stack direction='column' align='center' spacing={3} pt='20px' pb='60px'>
                        <Link href='/VotingPage'>
                            <Button bg='black' variant='solid' size='lg' textColor='white' borderRadius='0px' px='40px' _hover={{ opacity: '40%' }}>
                                VOTE NOW
                            </Button>
                        </Link>
                        <Link href='/DesignUpload'>
                            <Button border='2px' borderColor='black' bg='transparent' variant='solid' size='lg' textColor='black' borderRadius='0px' px='40px' _hover={{ color: 'black', opacity: '60%' }}>
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