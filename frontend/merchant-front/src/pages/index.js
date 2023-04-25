import { Stack, Box, Text, Image, Button, ChakraProvider } from '@chakra-ui/react';
import Link from 'next/link';

function Home() {
  return (
    <ChakraProvider>
      <Box bg='#E0DDD5' overflow='auto' h='calc(100vh)'>
        <Stack align='center' spacing={4} direction='row' bg='#111111' h='60px' pl='30px'>
          <Link href='/'><Image src='/logo.png' alt='Merchant Logo' w='36px'></Image></Link>
          <Link href='/Gallery'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Gallery</Button></Link>
          <Link href='/VotingPage'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Vote</Button></Link>
          <Link href='/DesignUpload'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Upload</Button></Link>
          <Link href='/Login'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Login</Button></Link>
        </Stack>
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