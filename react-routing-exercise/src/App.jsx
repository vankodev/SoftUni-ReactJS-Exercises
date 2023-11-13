import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import NavLinkExample from "./components/NavLinkExample";

function App() {
    return (
        <>
            <NavBar />
            <h1>React Router Exercise</h1>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/navlink" element={<NavLinkExample />} />
            </Routes>
        </>
    );
}

export default App;
