import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Components from "./components/Components";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="components" element={<Components />}></Route>
            </Routes>
        </div>
    );
}

export default App;
