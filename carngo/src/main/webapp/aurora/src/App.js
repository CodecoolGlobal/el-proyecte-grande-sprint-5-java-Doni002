import './App.css';
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehicleDetail from "./components/vehicle/VehicleDetail";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from './pages/Profile';
import Contact from "./pages/Contact";

function App() {
  return (
    <>
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= {<Home />} />;
                    <Route path="/vehicles" element= {<Vehicles />} />
                    <Route path="/profile" element= {<Profile />} />
                    <Route path="/contact" element= {<Contact />} />
                    <Route path="/vehicles/:id" element= {<VehicleDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    </>
  );
}

export default App;