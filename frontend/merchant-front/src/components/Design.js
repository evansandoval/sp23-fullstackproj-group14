import { ChakraProvider, Stack, Box, Image, Text } from '@chakra-ui/react'

function Design() { 
    return (
        <ChakraProvider>
          <Stack direction='column' align='center'>
            <Box boxSize='100px'>
              <Image src='rep-tshirt.jpeg' alt='Taylor Swift Reputation T-shirt' fallbackSrc='https://via.placeholder.com/500'/>
            </Box>          
            <Text fontWeight="bold" fontSize="xs" lineHeight="0.5">Reputation Tee</Text>
            <Text fontSize="xs" lineHeight="0.5"> swiftLuvr</Text>
          </Stack>
        </ChakraProvider>
      );

}

export default Design;