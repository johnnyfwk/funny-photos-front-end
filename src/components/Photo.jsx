export default function Photo({ photo, setIsPhotoFullSizeContainerVisible, setSelectedPhoto }) {
    function handleFullSizePhoto(event) {
        setIsPhotoFullSizeContainerVisible(true);
        const selectedPhotoObject = {};
        event.target.attributes.site.value
            ? selectedPhotoObject.site = event.target.attributes.site.value
            : selectedPhotoObject.site = "";
        event.target.attributes.url.value
            ? selectedPhotoObject.url = event.target.attributes.url.value
            : selectedPhotoObject.url = "";
        event.target.attributes.srcregular.value
            ? selectedPhotoObject.src = event.target.attributes.srcregular.value
            : selectedPhotoObject.src = "";
        event.target.alt
            ? selectedPhotoObject.alt = event.target.alt
            : selectedPhotoObject.alt = "";
        event.target.attributes.photographer.value
            ? selectedPhotoObject.photographer = event.target.attributes.photographer.value
            : selectedPhotoObject.photographer = "";
        event.target.attributes.photographerurl.value
            ? selectedPhotoObject.photographerUrl = event.target.attributes.photographerurl.value
            : selectedPhotoObject.photographerUrl = "";
        setSelectedPhoto(selectedPhotoObject);
    }

    return (
        <img
            site={photo.site}
            url={photo.url}
            src={photo.photoGallery}
            srcregular={photo.photoRegular}
            alt={photo.alt}
            photographer={photo.photographer}
            photographerurl={photo.photographerUrl}
            onClick={handleFullSizePhoto}
            loading="lazy"
        />
    )
}