import gifs from "./gifs.json";

export function getRandomUrl():  URL{
    // get a random object from @gifs
    const jobj = JSON.parse(JSON.stringify(gifs));
    const length = jobj.gifs.length - 2;
    console.log("=> ", length)
    
    
    const r1 = Math.floor(Math.random() * length);
    const r2 = Math.floor(Math.random() * length);
    let random = r1 + r2;
    random = random ? random > length? random - length : random : 0;
    
    console.log("random: " + random + " length: " + length + " r1: " + r1 + " r2: " + r2);
    
    const obj = jobj.gifs[random];
    // get the url from the object
    const url = new URL(obj);
    return url;
}
