import './App.css';
//import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
//import chakraTheme from '@chakra-ui/theme'
import { ChakraProvider, Stack, Box, Image } from '@chakra-ui/react'
import Home from './webpages/Home';
import Gallery from './webpages/Gallery';
import Design from './components/Design';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Home}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/webpages/Gallery" element={<button>Click Me</button>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
