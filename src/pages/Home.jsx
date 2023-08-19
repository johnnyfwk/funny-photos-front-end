import { useState } from 'react';
import Helmet from 'react-helmet';

export default function Home({ isLoadingPexels, isLoadingPexelsSuccessful, photos }) {
    const [selectedPhoto, setSelectedPhoto] = useState({});
    const [isPhotoFullSizeContainerVisible, setIsPhotoFullSizeContainerVisible] = useState(false);

    function handlePhoto(event) {
        setIsPhotoFullSizeContainerVisible(true);
        const selectedPhotoObject = {};
        selectedPhotoObject.site = event.target.attributes.site.value;
        selectedPhotoObject.url = event.target.attributes.url.value;
        selectedPhotoObject.src = event.target.attributes.srcregular.value;
        selectedPhotoObject.alt = event.target.attributes.alt.value;
        selectedPhotoObject.photographer = event.target.attributes.photographer.value;
        selectedPhotoObject.photographerUrl = event.target.attributes.photographerurl.value;
        setSelectedPhoto(selectedPhotoObject);
    }

    function handleClosePhotoFullSizeContainer() {
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
                {isLoadingPexels
                    ? <div>Loading photos...</div>
                    : null
                }

                {photos.length === 0
                    ? <div>No photos loaded.</div>
                    : <div className="photos-container">
                        {photos.map((photo) => {
                            return (
                                <img
                                    key={photo.url}
                                    site={photo.site}
                                    url={photo.url}
                                    src={photo.photoGallery}
                                    srcregular={photo.photoRegular}
                                    alt={photo.alt}
                                    photographer={photo.photographer}
                                    photographerurl={photo.photographerUrl}
                                    onClick={handlePhoto} loading="lazy"
                                />
                            )
                        })}
                    </div>
                }

                <div id="photo-full-size-container" style={stylePhotoFullSizeContainer}>
                    <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
                    <div>Photo by <a href={selectedPhoto.photographerUrl} target="_blank">{selectedPhoto.photographer}</a> on <a href={selectedPhoto.url} target="_blank">{selectedPhoto.site}</a></div>
                    <div id="close-photo-full-size-container-button" onClick={handleClosePhotoFullSizeContainer}>close</div>
                </div>
            </main>
        </div>
    )
}