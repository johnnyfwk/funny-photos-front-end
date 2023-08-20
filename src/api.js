import { createApi } from 'unsplash-js';
import { createClient } from 'pexels';

export function getUnsplashPhotos(query, pageNumber) {
    const unsplash = createApi({
        accessKey: "Y8eH8WFKyheok3uuHj0RSg-EEz1znKBAhMHguiLEim8"
    });

    const parameters = {
        query: query,
        order_by: "relevant",
        per_page: 30, // Max is 30 photos
        page: pageNumber
    };

    return unsplash.search.getPhotos(parameters)
        .then((response) => {
            return response.response.results;
        })
}

export function getPexelsPhotos(query, pageNumber) {
    const pexelsClient = createClient('FprQTrQvH9Qpa88qeEF6GDgKnwcWzoEd8Nixba1FqOGRKdMhfuGeIMda');

    const parameters = {
        query: query,
        per_page: 80, // Max is 80 photos
        page: pageNumber
    };

    return pexelsClient.photos.search(parameters)
        .then((response) => {
            return response.photos;
        })
}
