// import "./App.css";
import "./index.css";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import ProductsList from "./component/ProductsList";
import About from "./component/About";
import ProductDetails from "./component/ProductDetails";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider></Slider>
                <ProductsList></ProductsList>
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="product/:productId/" element={<ProductDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
