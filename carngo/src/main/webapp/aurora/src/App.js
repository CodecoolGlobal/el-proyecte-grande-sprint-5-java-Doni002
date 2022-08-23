import './App.css';
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehicleDetail from "./pages/VehicleDetail";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from './pages/Profile';

function App() {
  return (
    <>
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= {<Home />} />;
                    <Route path="/vehicles" element= {<Vehicles />} />
                    <Route path="/profile" element= {<Profile />} />
                    <Route path="/vehicles/:id" element= {<VehicleDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    </>
  );
}

export default App;