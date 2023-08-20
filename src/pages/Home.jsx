import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Helmet from 'react-helmet';
import LoadMoreButton from '../components/LoadMoreButton';
import Photo from '../components/Photo';
import TagInput from '../components/TagInput';
import * as api from "../api";
import * as utils from "../utils";

export default function Home() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const tag = searchParams.get("tag");

    const numberOfPhotosToDisplayAndIncrement = 50;

    const [isLoading, setIsLoading] = useState(null);
    
    const [query, setQuery] = useState("funny");
    const [pageNumber, setPageNumber] = useState(1);

    const [photos, setPhotos] = useState([]);

    const [numberOfPhotosToDisplay, setNumberOfPhotosToDisplay] = useState(50);
    const [photosToDisplay, setPhotosToDisplay] = useState([]);

    const [tagInput, setTagInput] = useState("Select a Tag");

    const [selectedPhoto, setSelectedPhoto] = useState({});
    const [isPhotoFullSizeContainerVisible, setIsPhotoFullSizeContainerVisible] = useState(false);

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
    }, [pageNumber, query])

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
    }, [pageNumber, query])

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
            {tag === null
                ? <Helmet>
                    <link rel="canonical" href="https://funnyphotos.co.uk/" />
                    <title>Find funny photos of almost anything • FunnyPhotos.co.uk</title>
                    <meta name="description" content="Browse funny photos sourced from stock photo and photography sites." />
                </Helmet>
                : <Helmet>
                    <link rel="canonical" href={`https://funnyphotos.co.uk/?tag=${tag}`} />
                    <title>Funny {utils.convertSlugToHeading(tag)} Photos • FunnyPhotos.co.uk</title>
                    <meta name="description" content={`Browse funny ${utils.convertSlugToText(tag)} photos on the Internet.`} />
                </Helmet>
            }
            
            <div id="header-container">
                <header className="max-width">
                    {tag === null
                        ? <h1>Find funny photos of almost anything</h1>
                        : <h1>Funny {utils.convertSlugToHeading(tag)} Photos</h1>
                    }
                    {tag === null
                        ? <p>Browse funny photos of almost anything sourced from stock photo and photography sites.</p>
                        : null
                    }
                </header>
            </div>

            <div id="main-container">
                <main className="max-width">
                    {isLoading
                        ? <div>Loading photos...</div>
                        : null
                    }

                    <TagInput
                        numberOfPhotosToDisplayAndIncrement={numberOfPhotosToDisplayAndIncrement}
                        tagInput={tagInput}
                        setTagInput={setTagInput}
                        setQuery={setQuery}
                        setPageNumber={setPageNumber}
                        setPhotos={setPhotos}
                        setNumberOfPhotosToDisplay={setNumberOfPhotosToDisplay}
                        setPhotosToDisplay={setPhotosToDisplay}
                    />

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
                        <div>Photo by <a href={selectedPhoto.photographerUrl} target="_blank" rel="noreferrer">{selectedPhoto.photographer}</a> on <a href={selectedPhoto.url} target="_blank" rel="noreferrer">{selectedPhoto.site}</a></div>
                        <div id="close-photo-full-size-container-button" onClick={handleHidePhotoFullSizeContainer}>[x]</div>
                    </div>
                </main>
            </div>
        </div>
    )
}