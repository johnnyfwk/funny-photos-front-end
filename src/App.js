import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import ShowNavButton from './components/ShowNavButton';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
    const numberOfPhotosToDisplayAndIncrement = 100;

    const [query, setQuery] = useState("funny");
    const [pageNumber, setPageNumber] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [numberOfPhotosToDisplay, setNumberOfPhotosToDisplay] = useState(numberOfPhotosToDisplayAndIncrement);
    const [photosToDisplay, setPhotosToDisplay] = useState([]);
    const [categoryInput, setCategoryInput] = useState("all-categories");
    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <div className="App">
            <div id="logo-and-nav-container">
                <div id="logo-and-nav" className="max-width">
                    <Logo
                        numberOfPhotosToDisplayAndIncrement={numberOfPhotosToDisplayAndIncrement}
                        setQuery={setQuery}
                        setPageNumber={setPageNumber}
                        setPhotos={setPhotos}
                        setNumberOfPhotosToDisplay={setNumberOfPhotosToDisplay}
                        setPhotosToDisplay={setPhotosToDisplay}
                        categoryInput={categoryInput}
                        setCategoryInput={setCategoryInput}
                    />
                    <Nav
                        isNavVisible={isNavVisible}
                        setIsNavVisible={setIsNavVisible}
                    />
                    <ShowNavButton
                        setIsNavVisible={setIsNavVisible}
                    />
                </div>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            numberOfPhotosToDisplayAndIncrement={numberOfPhotosToDisplayAndIncrement}
                            query={query}
                            setQuery={setQuery}
                            pageNumber={pageNumber}
                            setPageNumber={setPageNumber}
                            photos={photos}
                            setPhotos={setPhotos}
                            numberOfPhotosToDisplay={numberOfPhotosToDisplay}
                            setNumberOfPhotosToDisplay={setNumberOfPhotosToDisplay}
                            photosToDisplay={photosToDisplay}
                            setPhotosToDisplay={setPhotosToDisplay}
                            categoryInput={categoryInput}
                            setCategoryInput={setCategoryInput}
                        />
                    }
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
            <Footer
                numberOfPhotosToDisplayAndIncrement={numberOfPhotosToDisplayAndIncrement}
                setQuery={setQuery}
                setPageNumber={setPageNumber}
                setPhotos={setPhotos}
                setNumberOfPhotosToDisplay={setNumberOfPhotosToDisplay}
                setPhotosToDisplay={setPhotosToDisplay}
                categoryInput={categoryInput}
                setCategoryInput={setCategoryInput}
            />
        </div>
    );
}

export default App;