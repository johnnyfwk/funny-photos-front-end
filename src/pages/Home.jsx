import { useState } from 'react';
import Helmet from 'react-helmet';

export default function Home({ isLoadingPexels, isLoadingPexelsSuccessful, photos }) {
    console.log(photos)

    const [selectedPhoto, setSelectedPhoto] = useState({});

    function handlePhoto(event) {
        console.log(event)
    }

    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://funnyphotos.co.uk/" />
                <title>Find funny photos for any category • FunnyPhotos.co.uk</title>
                <meta name="description" content="Browse funny photos from stock photography sites." />
            </Helmet>

            <header className="max-width">
                <h1>Find funny photos for any category</h1>
            </header>

            <main className="max-width">
                <p>Some example content.</p>

                {isLoadingPexels
                    ? <div>Loading photos...</div>
                    : null
                }

                {isLoadingPexelsSuccessful === null
                    ? null
                    : isLoadingPexelsSuccessful === false
                        ? <div className="error">Pexels photos could not be loaded.</div>
                        : <div className="photos-container">
                            {photos.map((photo) => {
                                return <img key={photo.id} src={photo.src.medium} alt={photo.alt} loading="lazy" />
                            })}
                        </div>
                }

                {/* <div className="photos-container">
                    {photos.map((photo) => {
                        return <img key={photo.id} src={photo.src.medium} alt={photo.alt} onClick={handlePhoto} loading="lazy" />
                    })}
                </div> */}
            </main>
        </div>
    )
}