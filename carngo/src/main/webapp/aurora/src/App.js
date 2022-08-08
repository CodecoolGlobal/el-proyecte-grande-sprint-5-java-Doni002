import './App.css';
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <Navbar />
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
