import "./App.css";
import Navigation from "./Components/Navigation";
import BoxImg from "./Components/BoxImg";
import DetailsProduct from "./Components/DetailsProduct";
function App() {
  return (
    <>
      <Navigation />
      <main className="lg:flex lg:mx-20 lg:items-center lg:gap-32 lg:my-16 ">
        <BoxImg />
        <DetailsProduct />
      </main>
    </>
  );
}

export default App;
