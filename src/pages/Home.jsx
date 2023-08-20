import { useState } from 'react';
import Helmet from 'react-helmet';
import LoadMoreButton from '../components/LoadMoreButton';
import Photo from '../components/Photo';

export default function Home({
    numberOfPhotosToIncrement,
    isLoading,
    photos,
    setNumberOfPhotosToDisplay,
    photosToDisplay,
    setPageNumber
}) {
    const [selectedPhoto, setSelectedPhoto] = useState({});
    const [isPhotoFullSizeContainerVisible, setIsPhotoFullSizeContainerVisible] = useState(false);

    function handleHidePhotoFullSizeContainer() {
        setIsPhotoFullSizeContainerVisible(false);
    }

    const stylePhotoFullSizeContainer = {
        display: isPhotoFullSizeContainerVisible ? "grid" : "none"
    }

    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://funnyphotos.co.uk/" />
                <title>Find funny photos on the Internet • FunnyPhotos.co.uk</title>
                <meta name="description" content="Browse funny photos from stock photography sites." />
            </Helmet>

            <header className="max-width">
                <h1>Find funny photos on the Internet</h1>
            </header>

            <main className="max-width">
                {isLoading
                    ? <div>Loading photos...</div>
                    : null
                }

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
                        numberOfPhotosToIncrement={numberOfPhotosToIncrement}
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
    )
}