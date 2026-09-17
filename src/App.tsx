import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchArtists, type Artist } from "./api/musicBrainz";
import ArtistCard from "./components/ArtistCard";
function App(){

  const [artists, setArtists] = useState<Artist[]>([]);


  const handleSearch = async (query: string) => {
    const data = await searchArtists(query);
    setArtists(data.artists);

  }
  return (
    <main>
      <h1>Music Discovery</h1>
      <p>Discover artist and explore their music</p>
      <SearchBar onSearch={handleSearch} />
      <section>
    {artists.map((artist) => (
        <ArtistCard
            key={artist.id}
            artist={artist}
        />
    ))}
</section>
    </main>
  )
}

export default App;