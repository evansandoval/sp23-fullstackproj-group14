import { Stack, Box, Text, Image, Button, ChakraProvider } from '@chakra-ui/react';
import Link from 'next/link';
import NavBar from './NavBar';

function Home() {
  return (
    <ChakraProvider>
      {/* <Box align='right' bg='#E0DDD5'>
            <NavBar />
      </Box> */}
      <Box bg='#E0DDD5' overflow='auto' h='calc(100vh)'>
        <Stack direction='column' align='center' pb='80px' spacing='10px'>
          <Image src='/taylor-evermore.png' alt='Taylor Swift Folklore Photo' width='100%' fallbackSrc='https://via.placeholder.com/500' />
          <Stack spacing='5px' pt='50px' pb='20px' align='center'>
              <Text as='b' fontSize='50px' color='black' lineHeight='1.2'>Design for Taylor (Your Version)</Text>
              <Text fontSize='30px' color='black' lineHeight='1.2'>Submit designs and vote by 1/1 - 1/31.</Text>
          </Stack>
          <Link href='/Login'>
            <Button bg='black' variant='solid' size='lg' textColor='white' borderRadius='0px' px='40px' _hover={{ opacity: '40%' }}> 
                ENTER HERE
            </Button>
          </Link>
        </Stack>
      </Box>
    </ChakraProvider>
  )
}

export default Home;