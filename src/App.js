import "./App.css";
import Entete from "./components/entete/Entete";
import Home from "./components/home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Pied from "./components/footer/Pied";
import CategoryB from "./components/categoryB/CategoryB";
import CategoryS from "./components/categoryS/CategoryS";
import DriftCars from "./components/driftCars/DriftCars";
import AddonCars from "./components/addonCars/AddonCars";
import AddonDetails from "./components/addonCarDetails/AddonDetails";
import GovernmentDetails from "./components/governmentDetails/GovernmentDetails";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Entete />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Category/B" element={<CategoryB />} />
          <Route path="/Category/S" element={<CategoryS />} />
          <Route path="/Category/CxD" element={<DriftCars />} />
          <Route path="/Category/AddonCars" element={<AddonCars />} />
          <Route path="/Category/AddonCars/:name" element={<AddonDetails />} />
          <Route
            path="/Category/GovermentCars/:name"
            element={<GovernmentDetails />}
          />
        </Routes>
      </AnimatePresence>
      <Pied />
    </div>
  );
}

export default App;
