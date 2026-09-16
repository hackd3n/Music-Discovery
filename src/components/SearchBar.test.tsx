import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar",() => {
    it("renders the search input for an artist", async () => {
       
        const user = userEvent.setup();
        const handleSearch = vi.fn();

        render(<SearchBar onSearch={handleSearch} />)

        const input = screen.getByRole("textbox", {
            name: /search for an artist/i
        })

        await user.type(input, "Coldplay")

        expect(input).toHaveValue("Coldplay")

        await user.click(
            screen.getByRole("button", { name: /search/i })
    );

        expect(handleSearch).toHaveBeenCalledWith("Coldplay")
    })
})