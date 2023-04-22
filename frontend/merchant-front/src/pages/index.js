import { Inter } from 'next/font/google'
import { Stack, Box, Text, Image, Button } from '@chakra-ui/react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <Stack direction='column' align='center'>
            <Image src='/taylor-evermore.png' alt='Taylor Swift Folklore Photo' width='100%' fallbackSrc='https://via.placeholder.com/500' />
            <Stack spacing={3}>
                <Text as='b' fontSize='4xl'>Design for Taylor (Your Version)</Text>
                <Text fontSize='xl'>Submit designs and vote 1/1 - 1/31</Text>
            </Stack>
            <Link href='/Gallery'>
                <Button colorScheme='black' size='md'> 
                    ENTER HERE
                </Button>
            </Link>
        </Stack>
  )
}

export default Home;