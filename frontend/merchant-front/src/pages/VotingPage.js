import { Box, Button, Link, Stack, Image, IconButton, Text, ChakraProvider } from '@chakra-ui/react'
import { useState } from "react";

function VotingPage() {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  return (
    <ChakraProvider>
      <Stack align='center' spacing={4} direction='row' bg='#111111' h='60px' pl='30px'>
        <Link href='/'><Image src='/logo.png' alt='Merchant Logo' w='36px'></Image></Link>
        <Link href='/Gallery'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Gallery</Button></Link>
        <Link href='/VotingPage'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Vote</Button></Link>
        <Link href='/DesignUpload'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Upload</Button></Link>
        <Link href='/Login'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Login</Button></Link>
      </Stack>
      <Box display="flex" mt='30px' justifyContent="center">
        <Stack spacing={2} direction="column" align="center">
            <IconButton icon={<Image src="/midnights_merch.png" h="250px" />} h='250px' aria-label="Item 1" onClick={handleButtonClick} />
            <Box p='20px' ><Text as='b' bg='#111111' textColor="#E0DDD5" size='lg' py='15px' px='40px'>CLICK DESIGN TO VOTE</Text></Box>
            <IconButton icon={<Image src="/midnights_merch.png" h="250px" />} h='250px' aria-label="Item 2" onClick={handleButtonClick} />
        </Stack>
        {showAlert && (
            <Box position="fixed" top={0} left={0} right={0} bottom={0} backgroundColor="rgba(0, 0, 0, 0.5)" display="flex" alignItems="center" justifyContent="center">
                <Box bg="#E0DDD5" padding={4} borderRadius={4} align='center'>
                    <Box m='10px' w='220px' align='left'>Your vote has been recorded. Thank you for voting!</Box>
                    <Button bg='#111111' color="#E0DDD5" w='50%' onClick={() => setShowAlert(false)} _hover={{ opacity: '50%' }}>Close</Button>
                </Box>
            </Box>
        )}
      </Box>
    </ChakraProvider>
  );
}


export default VotingPage;


