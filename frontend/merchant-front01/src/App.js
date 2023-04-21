import './App.css';
//import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
//import chakraTheme from '@chakra-ui/theme'
import { ChakraProvider, Stack, Box, Image } from '@chakra-ui/react'
import Home from './Home.js';
import Design from './Design';

function App() {
  return (
    <ChakraProvider>
      <Stack direction={['column', 'row']} spacing='24px'>
        <Home/>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
