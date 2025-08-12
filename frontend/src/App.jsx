import { Box } from "@chakra-ui/react";
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
        <Box position="sticky" top="0" zIndex="999" bg="white" paddingTop="5" paddingBottom="5">
          <Navbar />
        </Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
  )
}

export default App;
