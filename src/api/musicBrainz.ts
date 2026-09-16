const BASE_URL = "https://musicbrainz.org/ws/2";

export async function searchArtists(query: string) {
    const response = await fetch(`${BASE_URL}/artist?query=${encodeURIComponent(query)}&fmt=json`);


    if(!response.ok) {
        throw new Error(`Failed to fetch artists: ${response.statusText}`);
    }
    return response.json();
}