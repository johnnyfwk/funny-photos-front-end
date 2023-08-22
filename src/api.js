
import axios from 'axios';
import { createClient } from 'pexels';

export function getPexelsPhotos(query, pageNumber) {
    const pexelsClient = createClient('FprQTrQvH9Qpa88qeEF6GDgKnwcWzoEd8Nixba1FqOGRKdMhfuGeIMda');

    const parameters = {
        query: query,
        per_page: 80, // Max photos per request is 80
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
    // Max photos per request is 200
    return axios
        .get(`https://pixabay.com/api/?key=${API_KEY}&q=${urlEncodedQuery}&page=${pageNumber}&per_page=200&image_type=photo`)
        .then((response) => {
            return response.data.hits;
        })
}
