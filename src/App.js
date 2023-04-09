import "./App.css";
import Navigation from "./Components/Navigation";
import BoxImg from "./Components/BoxImg";
import DetailsProduct from "./Components/DetailsProduct";
function App() {
  return (
    <>
      <Navigation />
      <main className="lg:flex lg:mx-5 lg:items-center lg:gap-32 lg:py-16">
        <BoxImg />
        <DetailsProduct />
      </main>
    </>
  );
}

export default App;
