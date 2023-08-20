import './App.css';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
    return (
        <div className="App">
            <Logo />
            <Routes>
                <Route
                    path="/"
                    element={ <Home /> }
                ></Route>
                <Route
                    path="/contact"
                    element={ <Contact /> }
                ></Route>
                <Route
                    path="/terms-and-conditions"
                    element={ <TermsAndConditions /> }
                ></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;