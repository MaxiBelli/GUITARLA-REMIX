export async function getGuitars() {
    const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
    return await response.json();
}

export async function getGuitar(guitarUrl) {
    const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${guitarUrl}&populate=image`);
    return await response.json();
}