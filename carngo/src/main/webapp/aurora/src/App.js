import './App.css';
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";

function App() {
    let component;
    switch (window.location.pathname) {
        case "/":
            component = <Home />
            break
        case "/vehicles":
            component = <Vehicles />
            break
    }
  return (
    <>
        <div className="container">{component}</div>
    </>
  );
}

export default App;
