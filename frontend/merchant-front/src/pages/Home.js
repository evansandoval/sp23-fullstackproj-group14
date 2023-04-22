import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Image, Text, Stack, Button } from "@chakra-ui/react";

function Home() {
    <Stack direction='column' align='center'>
      <Image src='/taylor-evermore.png' alt='Taylor Swift Folklore Photo' width='100%' fallbackSrc='https://via.placeholder.com/500' />
      <Stack spacing={3}>
          <Text as='b' fontSize='xl'>Design for Taylor (Your Version)</Text>
          <Text fontSize='md'>Submit designs and vote 1/1 - 1/31</Text>
      </Stack>
      <Link href='/Gallery'>
          <Button colorScheme='black' size='md'> 
              ENTER HERE
          </Button>
      </Link>
    </Stack>
}

export default Home;