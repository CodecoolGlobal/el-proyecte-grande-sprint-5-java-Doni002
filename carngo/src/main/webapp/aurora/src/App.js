import './App.css';
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= {<Home />} />;
                    <Route path="/vehicles" element= {<Vehicles />} />
                    <Route path="/profile" element= {<Profile />} />
                    <Route path="/sign-up" element= {<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    </>
  );
}

export default App;
