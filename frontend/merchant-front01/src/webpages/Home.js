import { Stack, Link, Box, Text, Image, Button } from '@chakra-ui/react'

function Home() {
    return (
        <Stack direction='column' align='center'>
            <Image src='./images/taylor-evermore.jpg' alt='Taylor Swift Folklore Photo' width='50%' fallbackSrc='https://assets.teenvogue.com/photos/5fd4d29fe6ff71e902f97c1a/16:9/w_2560%2Cc_limit/taylor-evermore-resized.jpg' />
            <Text>Design for Taylor (Your Version)</Text>
            <Text>Submit designs and vote 1/1 - 1/31</Text>
            <Link href='./Gallery'>
                <Button colorScheme='black' size='md'> 
                    ENTER HERE
                </Button>
            </Link>
        </Stack>
    );
}

export default Home;