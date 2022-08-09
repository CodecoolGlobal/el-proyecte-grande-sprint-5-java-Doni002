import './App.css';
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import Navbar from "./components/header/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= {<Home />} />;
                    <Route path="/vehicles" element= {<Vehicles />} />
                </Routes>
            </BrowserRouter>
        </div>
    </>
  );
}

export default App;
