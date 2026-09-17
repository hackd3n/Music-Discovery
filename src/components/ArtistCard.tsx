import type { Artist } from "../api/musicBrainz"


function ArtistCard({ artist}: {artist: Artist}) {

    return (
        <article>
            <h2>
                {artist.name}
            </h2>
            {/* render p element if artist.type, artist.country, or artist.disambiguation is present */}

            {artist.type && <p> Type: {artist.type}</p>}
            {artist.country && <p> Country: {artist.country}</p>}
            {artist.disambiguation && <p>{artist.disambiguation}</p>}
        </article>
    );
}


export default ArtistCard;