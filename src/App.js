import "./App.css";
import Navigation from "./Components/Navigation";
import BoxImg from "./Components/BoxImg";
import DetailsProduct from "./Components/DetailsProduct";
function App() {
  return (
    <>
      <Navigation />
      <main>
        <BoxImg />
        <DetailsProduct />
      </main>
    </>
  );
}

export default App;
