import Home from './Home';
import Gallery from './Gallery';
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
