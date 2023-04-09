import "./App.css";
import Navigation from "./Components/Navigation";
import BoxImg from "./Components/BoxImg";
import DetailsProduct from "./Components/DetailsProduct";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Navigation/>
      <main className="lg:flex lg:mx-20 lg:items-center lg:gap-32 lg:my-16 ">
        <BoxImg />
        <DetailsProduct />
      </main>
    </ChakraProvider>
  );
}

export default App;
