export const getImageUrl = (path) => {
    //to construct absolute path from relative path
    return new URL(`./assets/${path}`, import.meta.url).href;
}