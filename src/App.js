import "./App.css";
import Navigation from "./Components/Navigation";
import BoxImg from "./Components/BoxImg";
import DetailsProduct from "./Components/DetailsProduct";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import React, { useState } from "react";
const fonts = {
  body: "Kumbh Sans",
};
const theme = extendTheme({ fonts });
export const CartContext = React.createContext({});
function App() {
  const [cart, setCart] = useState({});
  return (
    <ChakraProvider theme={theme}>
      <div className="mx-auto lg:max-w-[1300px]">
        <CartContext.Provider
          value={{ cart: cart, setCart: setCart, maxProducts: 5 }}
        >
          <Navigation />
          <main className="lg:flex lg:mx-20 lg:items-center lg:gap-32 lg:my-16 ">
            <h1 className="absolute z-[-10]">E-commerce product page</h1>
            <BoxImg />
            <DetailsProduct />
          </main>
        </CartContext.Provider>
      </div>
    </ChakraProvider>
  );
}

export default App;
