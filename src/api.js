
import { createClient } from 'pexels';
import axios from 'axios';

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

export function getPixabayPhotos(query, pageNumber) {
    const API_KEY = '38972787-b7650a2df283868c71b057c94';
    const urlEncodedQuery = query.replaceAll(" ", "+");
    return axios
        .get(`https://pixabay.com/api/?key=${API_KEY}&q=${urlEncodedQuery}&page=${pageNumber}&per_page=200&image_type=photo`)
        .then((response) => {
            return response.data.hits;
        })
}
