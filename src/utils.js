export function createPhotoObject(site, photoUrl, photoRegular, photoGallery, alt, photographer, photographerUrl) {
    const photoObject = {};
    photoObject.site = site;
    photoObject.url = photoUrl;
    photoObject.photoRegular = photoRegular;
    photoObject.photoGallery = photoGallery;
    photoObject.alt = alt;
    photoObject.photographer = photographer;
    photoObject.photographerUrl = photographerUrl;
    return photoObject;
}