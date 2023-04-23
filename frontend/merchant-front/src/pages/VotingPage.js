import { Box, Button, Stack, Image, IconButton, Text, ChakraProvider } from '@chakra-ui/react'
import { useState } from "react";

function VotingPage() {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  return (
    <ChakraProvider>
        <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
        <Stack spacing={85} direction="column" align="center">
            <IconButton icon={<Image src="https://i.pinimg.com/736x/30/b9/06/30b906f9cc85d6746e8b02c1d02a62c9.jpg" height ="300px" py='20px' />} aria-label="Item 1" onClick={handleButtonClick} />
            <Box p='20px' ><Text bg="black" textColor="white" py='20px' px='40px'>CLICK DESIGN TO VOTE</Text></Box>
            <IconButton icon={<Image src="https://assets.vogue.com/photos/59a07007cbf1c01962e3021f/4:3/w_1600,h_1200,c_limit/01-taylor-swift-merch.jpg" height ="300px" py='20px' />} aria-label="Item 2" onClick={handleButtonClick} />
        </Stack>
        {showAlert && (
            <Box position="fixed" top={0} left={0} right={0} bottom={0} backgroundColor="rgba(0, 0, 0, 0.5)" display="flex" alignItems="center" justifyContent="center">
            <Box backgroundColor="white" padding={4} borderRadius={4}>
                <Box marginBottom={2}>Thanks for voting!</Box>
                <Button onClick={() => setShowAlert(false)}>Close</Button>
            </Box>
            </Box>
        )}
        </Box>
    </ChakraProvider>
  );
}


export default VotingPage;


