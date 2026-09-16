import { useState } from "react";

function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {


    const [query, setQuery] = useState("");

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="artist-search">Search for an artist:</label>
            <input
                type="text"
                id="artist-search"
                value={query}
                onChange={(e) => {setQuery(e.target.value)}}>

                </input>
                <button type="submit" >Search</button>
        </form>
    )
}


export default SearchBar;