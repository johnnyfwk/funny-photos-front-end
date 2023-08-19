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
    const [photos, setPhotos] = useState([]);

    const [isLoadingUnsplash, setIsLoadingUnsplash] = useState(true);
    const [isLoadingUnsplashSuccessful, setIsLoadingUnsplashSuccessful] = useState(null);
    
    const [isLoadingPexels, setIsLoadingPexels] = useState(true);
    const [isLoadingPexelsSuccessful, setIsLoadingPexelsSuccessful] = useState(null);

    useEffect(() => {
        setIsLoadingUnsplash(true);
        setIsLoadingUnsplashSuccessful(null);
        api.getUnsplashphotos(query)
            .then((response) => {
                console.log(response);
                setIsLoadingUnsplash(false);
                setIsLoadingUnsplashSuccessful(true);
                const unsplash = response.map((photo) => {
                    const photoObject = {};
                    photoObject.site = "Unsplash";
                    photoObject.url = photo.links.html;
                    photoObject.photoRegular = photo.urls.regular;
                    photoObject.photoGallery = photo.urls.small;
                    photoObject.alt = photo.alt_description;
                    photoObject.photographer = photo.user.username;
                    photoObject.photographerUrl = photo.user.links.html;
                    return photoObject;
                })
                setPhotos((currentPhotos) => {
                    return [...currentPhotos, ...unsplash];
                });
            })
            .catch((error) => {
                console.log(error);
                setIsLoadingUnsplash(false);
                setIsLoadingUnsplashSuccessful(false);
            })
    }, [])

    useEffect(() => {
        setIsLoadingPexels(true);
        setIsLoadingPexelsSuccessful(null);
        api.getPexelsPhotos(query)
            .then((response) => {
                setIsLoadingPexels(false);
                setIsLoadingPexelsSuccessful(true);
                const pexels = response.map((photo) => {
                    const photoObject = {};
                    photoObject.site = "Pexels";
                    photoObject.url = photo.url;
                    photoObject.photoRegular = photo.src.original;
                    photoObject.photoGallery = photo.src.medium;
                    photoObject.alt = photo.alt;
                    photoObject.photographer = photo.photographer;
                    photoObject.photographerUrl = photo.photographer_url;
                    return photoObject;
                })
                setPhotos((currentPhotos) => {
                    console.log(currentPhotos, "<-------- currentPhotos")
                    return [...currentPhotos, ...pexels];
                });
            })
            .catch((error) => {
                console.log(error);
                setIsLoadingPexels(false);
                setIsLoadingPexelsSuccessful(false);
            })
    }, [])

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