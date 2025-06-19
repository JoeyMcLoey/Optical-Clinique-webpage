import { Box, ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  
  return (
      <Box width="100vw">
        <Logo />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
  )
}

export default App;
