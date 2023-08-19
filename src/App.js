import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './components/Logo';
import Home from './pages/Home';
import Footer from './components/Footer';
import * as api from './api';
import photosJS from './content/photos';

function App() {
    const [query, setQuery] = useState("funny");
    const [isLoadingPexels, setIsLoadingPexels] = useState(true);
    const [isLoadingPexelsSuccessful, setIsLoadingPexelsSuccessful] = useState(null);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        setIsLoadingPexels(true);
        setIsLoadingPexelsSuccessful(null);
        api.getPexelsPhotos(query)
            .then((response) => {
                console.log(response);
                setIsLoadingPexels(false);
                setIsLoadingPexelsSuccessful(true);
                setPhotos(response);
            })
            .catch((error) => {
                console.log(error);
                setIsLoadingPexels(false);
                setIsLoadingPexelsSuccessful(false);
            })
    }, [])

    // useEffect(() => {
    //     setPhotos(photosJS);
    // }, [])

    console.log(photos)

    return (
        <div className="App">
            <Logo />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            isLoadingPexels={isLoadingPexels}
                            isLoadingPexelsSuccessful={isLoadingPexelsSuccessful}
                            photos={photos}
                        />
                    }
                ></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;