import { createClient } from 'pexels';

export function getPexelsPhotos(query) {
    const pexelsClient = createClient('FprQTrQvH9Qpa88qeEF6GDgKnwcWzoEd8Nixba1FqOGRKdMhfuGeIMda');

    return pexelsClient.photos.search({ query })
        .then((response) => {
            return response.photos;
        })
}