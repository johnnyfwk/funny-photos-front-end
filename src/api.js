import { createApi } from 'unsplash-js';
import { createClient } from 'pexels';

export function getPexelsPhotos(query) {
    const pexelsClient = createClient('FprQTrQvH9Qpa88qeEF6GDgKnwcWzoEd8Nixba1FqOGRKdMhfuGeIMda');

    return pexelsClient.photos.search({ query })
        .then((response) => {
            return response.photos;
        })
}

export function getUnsplashphotos(query) {
    const unsplash = createApi({
        accessKey: "Y8eH8WFKyheok3uuHj0RSg-EEz1znKBAhMHguiLEim8"
    });

    return unsplash.search.getPhotos({ query: query })
        .then((response) => {
            return response.response.results;
        })
}