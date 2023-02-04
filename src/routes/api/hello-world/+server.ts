import { json } from "@sveltejs/kit";

export async function GET({ request }: any)
{
    return json({ message: "Hello, world!" });
}
