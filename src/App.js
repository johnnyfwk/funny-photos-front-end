import './App.css';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Logo />
            <Routes>
                <Route
                    path="/"
                    element={ <Home /> }
                ></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;