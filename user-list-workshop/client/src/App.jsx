import Footer from "./components/Footer";
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import "./styles.css";

function App() {
    return (
        <>
            <Header />

            <main className="main">
                <UsersList />
            </main>

            <Footer />
        </>
    );
}

export default App;
