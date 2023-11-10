import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import PageNotFound from "./components/PageNotFound";

function App() {
    return (
        <>
            <Navigation />

            <h1>React Router</h1>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/characters" element={<CharacterList />} />
                <Route path="/characters/:id" element={<CharacterDetails />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

            <footer>All rights reserved &copy;</footer>
        </>
    );
}

export default App;
