
import axios from 'axios';
import { createClient } from 'pexels';

export function getPexelsPhotos(query, pageNumber) {
    const pexelsClient = createClient(process.env.REACT_APP_PEXELS);

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
    const apiKey = process.env.REACT_APP_PIXABAY;
    const urlEncodedQuery = query.replaceAll(" ", "+");
    // Max photos per request is 200
    return axios
        .get(`https://pixabay.com/api/?key=${apiKey}&q=${urlEncodedQuery}&page=${pageNumber}&per_page=200&image_type=photo`)
        .then((response) => {
            return response.data.hits;
        })
}
