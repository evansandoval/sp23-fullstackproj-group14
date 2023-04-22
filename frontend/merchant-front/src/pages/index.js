import { Stack, Box, Text, Image, Button, ButtonGroup, ChakraProvider } from '@chakra-ui/react';
import Link from 'next/link';

//const poppins = Poo({ subsets: ['latin'] })

function Home() {
  return (
    <ChakraProvider>
      <Stack direction='column' align='center' backgroundColor='#E0DDD5' pb='40px'>
        <Image src='/taylor-evermore.png' alt='Taylor Swift Folklore Photo' width='100%' fallbackSrc='https://via.placeholder.com/500' />
        <Stack spacing={3} py='20px' align='center'>
            <Text as='b' fontSize='50px' color='black'>Design for Taylor (Your Version)</Text>
            <Text fontSize='36px' color='black'>Submit designs and vote by 1/1 - 1/31.</Text>
        </Stack>
        <Link href='/Gallery'>
          <Button color='#FFFFFF' variant='solid' size='lg' textColor='white'> 
              ENTER HERE
          </Button>
        </Link>
      </Stack>
    </ChakraProvider>
  )
}

export default Home;