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

export function convertHeadingToSlug(heading) {
    const headingCopy = heading;
    if (headingCopy.includes("&")) {
        return headingCopy.replaceAll("&", "and").replaceAll(" ", "-").toLowerCase();
    }
    else {
        return headingCopy.replaceAll(" ", "-").toLowerCase();
    }
}

export function convertSlugToHeading(slug) {
    const slugCopy = slug;
    if (slugCopy.includes("-")) {
        const slugAsArray = slugCopy.split("-");
        const heading = slugAsArray.map((word) => {
            if (word.includes("and")) {
                return "&"
            }
            else {
                const wordCopy = word[0].toUpperCase() + word.slice(1);
                return wordCopy;
            }
        });
        return heading.join(" ");
    }
    else {
        let heading;
        if (slugCopy === "animals") {
            heading = "Animal";
        }
        else if (slugCopy === "occasions") {
            heading = "Occasion";
        }
        else if (slugCopy === "vehicles") {
            heading = "Vehicle";
        }
        else if (slugCopy === "movies") {
            heading = "Movie";
        }
        else {
            heading = slugCopy[0].toUpperCase() + slugCopy.slice(1);
        }
        return heading;
    }
}

export function convertSlugToText(slug) {
    const slugCopy = slug;
    if (slugCopy.includes("-")) {
        const slugAsArray = slugCopy.split("-");
        const text = slugAsArray.join(" ");
        return text;
    }
    else {
        let text;
        if (slugCopy === "animals") {
            text = "animal";
        }
        else if (slugCopy === "occasions") {
            text = "occasion";
        }
        else if (slugCopy === "vehicles") {
            text = "vehicle";
        }
        else if (slugCopy === "movies") {
            text = "movie";
        }
        else {
            text = slugCopy;
        }
        return text;
    }
}