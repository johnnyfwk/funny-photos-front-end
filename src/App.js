import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './components/Logo';
import Home from './pages/Home';
import Footer from './components/Footer';
import * as api from './api';
import * as utils from './utils';

function App() {
    const numberOfPhotosToIncrement = 50;

    const [isLoading, setIsLoading] = useState(null);

    const [query, setQuery] = useState("funny");
    const [pageNumber, setPageNumber] = useState(1);

    const [photos, setPhotos] = useState([]);

    const [numberOfPhotosToDisplay, setNumberOfPhotosToDisplay] = useState(50);
    const [photosToDisplay, setPhotosToDisplay] = useState([]);

    useEffect(() => {
        setIsLoading(null);
        api.getUnsplashPhotos(query, pageNumber)
            .then((response) => {
                setIsLoading(false);
                const unsplash = response.map((photo) => {
                    return utils.createPhotoObject(
                        "Unsplash",
                        photo.links.html,
                        photo.urls.regular,
                        photo.urls.small,
                        photo.alt_description,
                        photo.user.name,
                        photo.user.links.html
                    );
                })
                setPhotos((currentPhotos) => {
                    return [...currentPhotos, ...unsplash];
                });
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            })
    }, [pageNumber])

    useEffect(() => {
        setIsLoading(null);
        api.getPexelsPhotos(query, pageNumber)
            .then((response) => {
                setIsLoading(false);
                const pexels = response.map((photo) => {
                    return utils.createPhotoObject(
                        "Pexels",
                        photo.url,
                        photo.src.original,
                        photo.src.medium,
                        photo.alt,
                        photo.photographer,
                        photo.photographer_url
                    );
                })
                setPhotos((currentPhotos) => {
                    setPhotosToDisplay([...currentPhotos, ...pexels].slice(0, numberOfPhotosToDisplay));
                    return [...currentPhotos, ...pexels];
                });
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            })
    }, [pageNumber])

    useEffect(() => {
        const updatedPhotosToDisplay = photos.slice(0, numberOfPhotosToDisplay);
        setPhotosToDisplay(updatedPhotosToDisplay);
    }, [numberOfPhotosToDisplay])

    return (
        <div className="App">
            <Logo />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            numberOfPhotosToIncrement={numberOfPhotosToIncrement}
                            isLoading={isLoading}
                            photos={photos}
                            setNumberOfPhotosToDisplay={setNumberOfPhotosToDisplay}
                            photosToDisplay={photosToDisplay}
                            setPageNumber={setPageNumber}
                        />
                    }
                ></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;