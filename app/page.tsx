import styles from "./page.module.css";
import { Divider, Box, HStack, Spacer } from "@chakra-ui/react";
import Header from "./components/Header";
import Options from "./components/Options";
import Carrusel from "./components/Carrusel";
import Footer from "./components/Footer";
import Products from "./components/Products";

export default async function Home() {
  return (
    <div>
      <main>
        <Header />
        <Divider />
        <Options />
        <Carrusel />
        <HStack spacing='30px' margin='20px' fontSize='21px'>
          <Spacer />
            <Box>N E W</Box>
            <Box>A R R I V A L S</Box>
          <Spacer />
        </HStack>
        <Products />
        <Footer />
      </main>
    </div>
  );
}
