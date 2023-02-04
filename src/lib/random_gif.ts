import gifs from "./gifs.json";

export function getRandomUrl():  URL{
    // get a random object from @gifs
    const jobj = JSON.parse(JSON.stringify(gifs));
    const length = jobj.length;
    const random = Math.floor(Math.random() * length);
    const obj = jobj[random].url;
    // get the url from the object
    const url = new URL(obj);
    return url;
}
