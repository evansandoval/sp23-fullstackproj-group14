import './App.css';
//import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
//import chakraTheme from '@chakra-ui/theme'
import { ChakraProvider, Stack, Box, Image } from '@chakra-ui/react'
import Home from '../../merchant-front/src/pages/Home';
import Gallery from '../../merchant-front/src/pages/Gallery';
import Design from '../../merchant-front/src/components/Design';
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
