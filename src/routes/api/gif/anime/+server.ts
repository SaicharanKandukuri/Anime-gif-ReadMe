import { json } from "@sveltejs/kit";
import { getRandomUrl } from "$lib/random_gif.ts";

export async function GET({request}: any) {
    // https://user-images.githubusercontent.com/68287637/212882218-4bcc2eae-08a4-4175-a8cc-afb00ed0087a.gif
    const imgurl = getRandomUrl();
    // get the image

    let img;
    try {
        img = await fetch(imgurl);
    } catch (e) {
        console.log(e);
        return new Response("Error fetching image", {status: 500});
    }
    // get the image as a blob
    const blob = await img.blob();

   return new Response(blob);
}
