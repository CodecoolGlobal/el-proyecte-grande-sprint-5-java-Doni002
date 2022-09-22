import './App.css';
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehicleDetail from "./pages/VehicleDetail";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from './pages/Profile';
import Contact from "./pages/Contact";
import {AuthProvider} from "./context/authContext";
import UploadCar from "./pages/UploadCar";

function App() {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
  return (
    <>
        <div className="container">
            <AuthProvider userData={user}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element= {<Home />} />;
                        <Route path="/vehicles" element= {<Vehicles />} />
                        <Route path="/profile/:id" element= {<Profile />} />
                        <Route path="/contact" element= {<Contact />} />
                        <Route path="/vehicles/:id" element= {<VehicleDetail />} />
                        <Route path="/shareyourcar" element= {<UploadCar />} />
{/*                        <Route path="/shareyourcar" element= {<ProtectedRoute allowedRole="ROLE_ADMIN"><UploadCar /> </ProtectedRoute >} />*/}
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    </>
  );
}

export default App;
