import { ChakraProvider, Stack, Box, Image, Text } from '@chakra-ui/react'

function Design() { 
    return (
        <ChakraProvider>
          <Stack direction='column' align='center' spacing='10px'>
            <Box boxSize='100px'>
              <Image src='midnights_merch.png' alt='Taylor Swift Midnights T-shirt' fallbackSrc='https://via.placeholder.com/500'/>
            </Box>          
            <Text color='white' fontWeight="bold" fontSize="xs" lineHeight="0.5">Midnights Tee</Text>
            <Text color='white' fontSize="xs" lineHeight="0.5"> swiftLuvr</Text>
          </Stack>
        </ChakraProvider>
      );

}

export default Design;