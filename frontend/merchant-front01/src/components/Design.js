import { ChakraProvider, Stack, Box, Image, Text } from '@chakra-ui/react'

function Design() { 
    return (
        <ChakraProvider>
          <Stack direction='column'>
            <Box boxSize='sm'>
              <Image src='./images/rep-tshirt.jpeg' alt='Taylor Swift Reputation T-shirt' fallbackSrc='https://via.placeholder.com/500'/>
            </Box>
            <Text noOfLines={2}>
              Reputation Tee
              swiftLover22
            </Text>
          </Stack>
        </ChakraProvider>
      );

}

export default Design;