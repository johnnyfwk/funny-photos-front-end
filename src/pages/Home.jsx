import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Helmet from 'react-helmet';
import LoadMoreButton from '../components/LoadMoreButton';
import Photo from '../components/Photo';
import Categories from '../components/Categories';
import * as api from "../api";
import * as utils from "../utils";
import Search from '../components/Search';

export default function Home({
    numberOfPhotosToDisplayAndIncrement,
    query,
    setQuery,
    pageNumber,
    setPageNumber,
    photos,
    setPhotos,
    numberOfPhotosToDisplay,
    setNumberOfPhotosToDisplay,
    photosToDisplay,
    setPhotosToDisplay,
    categoryInput,
    setCategoryInput,
    searchInput,
    setSearchInput
}) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const tag = searchParams.get("tag");

    const [isLoading, setIsLoading] = useState(null);

    const [selectedPhoto, setSelectedPhoto] = useState({});
    const [isPhotoFullSizeContainerVisible, setIsPhotoFullSizeContainerVisible] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true);
    //     api.getPixabayPhotos(query, pageNumber)
    //         .then((response) => {
    //             setIsLoading(false);
    //             const pixabay = response.map((photo) => {
    //                 return utils.createPhotoObject(
    //                     "Pixabay",
    //                     photo.pageURL,
    //                     photo.largeImageURL,
    //                     photo.webformatURL,
    //                     "",
    //                     photo.user,
    //                     ""
    //                 );
    //             });
    //             setPhotos((currentPhotos) => {
    //                 return [...currentPhotos, ...pixabay];
    //             });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             setIsLoading(false);
    //         })
        
    //     setIsLoading(true);
    //     api.getPexelsPhotos(query, pageNumber)
    //         .then((response) => {
    //             setIsLoading(false);
    //             const pexels = response.map((photo) => {
    //                 return utils.createPhotoObject(
    //                     "Pexels",
    //                     photo.url,
    //                     photo.src.original,
    //                     photo.src.medium,
    //                     photo.alt,
    //                     photo.photographer,
    //                     photo.photographer_url
    //                 );
    //             })
    //             setPhotos((currentPhotos) => {
    //                 return [...currentPhotos, ...pexels];
    //             });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             setIsLoading(false);
    //         })
    // }, [pageNumber, query])

    useEffect(() => {
        setPhotosToDisplay(photos.slice(0, numberOfPhotosToDisplay));
    }, [photos])

    useEffect(() => {
        const updatedPhotosToDisplay = photos.slice(0, numberOfPhotosToDisplay);
        setPhotosToDisplay(updatedPhotosToDisplay);
    }, [numberOfPhotosToDisplay])

    function handleHidePhotoFullSizeContainer() {
        setIsPhotoFullSizeContainerVisible(false);
    }

    const stylePhotoFullSizeContainer = {
        display: isPhotoFullSizeContainerVisible ? "grid" : "none"
    }

    return (
        <div id="home">
            {category === null && search === null && tag === null
                ? <Helmet>
                    <link rel="canonical" href="https://funnyphotos.co.uk/" />
                    <title>Find funny photos of almost anything • FunnyPhotos.co.uk</title>
                    <meta name="description" content="Browse funny photos of almost anything from stock photo, photography, and media sites." />
                </Helmet>
                : null
            }
            {category
                ? <Helmet>
                    <link rel="canonical" href={`https://funnyphotos.co.uk/?category=${category}`} />
                    <title>Funny {utils.convertSlugToHeading(category)} Photos • FunnyPhotos.co.uk</title>
                    <meta name="description" content={`Browse funny ${utils.convertSlugToText(category)} photos from stock photo, photography, and media sites.`} />
                </Helmet>
                : null
            }
            {tag
                ? <Helmet>
                    <link rel="canonical" href={`https://funnyphotos.co.uk/?tag=${tag}`} />
                    <title>Funny {utils.convertSlugToHeading(tag)} Photos • FunnyPhotos.co.uk</title>
                    <meta name="description" content={`Browse funny ${utils.convertSlugToText(tag)} photos from stock photo, photography, and media sites.`} />
                </Helmet>
                : null
            }
            {search
                ? <Helmet>
                    <link rel="canonical" href="https://funnyphotos.co.uk/" />
                    <title>Search: '{search}' • FunnyPhotos.co.uk</title>
                    <meta name="description" content="Browse funny photos of almost anything from stock photo, photography, and media sites." />
                </Helmet>
                : null
            }
            
            <div id="header-container">
                {category === null && search === null && tag === null
                    ? <header className="max-width">
                        <h1>Find funny photos of almost anything</h1>
                        <p>Browse funny photos from stock photo, photography, and media sites.</p>
                    </header>
                    : null
                }
                {category
                    ? <header className="max-width">
                        <h1>Funny {utils.convertSlugToHeading(category)} Photos</h1>
                    </header>
                    : null
                }
                {tag
                    ? <header className="max-width">
                        <h1>Funny {utils.convertSlugToHeading(tag)} Photos</h1>
                    </header>
                    : null
                }
                {search
                    ? <header className="max-width">
                        <h1>Search: '{search}'</h1>
                    </header>
                    : null
                }
            </div>

            <div id="main-container">
                <main className="max-width">
                    {isLoading
                        ? <div>Loading photos...</div>
                        : null
                    }

                    <div id="components-search-and-categories">
                        <Search
                            numberOfPhotosToDisplayAndIncrement={numberOfPhotosToDisplayAndIncrement}
                            searchInput={searchInput}
                            setSearchInput={setSearchInput}
                            setQuery={setQuery}
                            setPageNumber={setPageNumber}
                            setPhotos={setPhotos}
                            setNumberOfPhotosToDisplay={setNumberOfPhotosToDisplay}
                            setPhotosToDisplay={setPhotosToDisplay}
                            setCategoryInput={setCategoryInput}
                        />

                        <Categories
                            numberOfPhotosToDisplayAndIncrement={numberOfPhotosToDisplayAndIncrement}
                            categoryInput={categoryInput}
                            setCategoryInput={setCategoryInput}
                            setQuery={setQuery}
                            setPageNumber={setPageNumber}
                            setPhotos={setPhotos}
                            setNumberOfPhotosToDisplay={setNumberOfPhotosToDisplay}
                            setPhotosToDisplay={setPhotosToDisplay}
                            setSearchInput={setSearchInput}
                        />
                    </div>

                    {photosToDisplay.length === 0
                        ? <div>No photos to display.</div>
                        : <div className="photos-container">
                            {photosToDisplay.map((photo) => {
                                return <Photo key={photo.url} photo={photo} setIsPhotoFullSizeContainerVisible={setIsPhotoFullSizeContainerVisible} setSelectedPhoto={setSelectedPhoto} />
                            })}
                        </div>
                    }

                    {photosToDisplay.length < photos.length
                        ? <LoadMoreButton
                            setNumberOfPhotosToDisplay={setNumberOfPhotosToDisplay}
                            numberOfPhotosToDisplayAndIncrement={numberOfPhotosToDisplayAndIncrement}
                            setPageNumber={setPageNumber}
                        />
                        : null
                    }

                    <div id="photo-full-size-container" style={stylePhotoFullSizeContainer}>
                        <h2>{selectedPhoto.alt}</h2>
                        <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
                        <div>Photo by {selectedPhoto.photographerUrl ? <a href={selectedPhoto.photographerUrl} target="_blank" rel="noreferrer">{selectedPhoto.photographer}</a> : <span>{selectedPhoto.photographer}</span>} on <a href={selectedPhoto.url} target="_blank" rel="noreferrer">{selectedPhoto.site}</a></div>
                        <div id="close-photo-full-size-container-button" onClick={handleHidePhotoFullSizeContainer}>[x]</div>
                    </div>
                </main>
            </div>
        </div>
    )
}