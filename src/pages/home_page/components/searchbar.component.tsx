import React, { useState, ChangeEvent, FormEvent } from "react";

const SearchBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`You searched for: ${searchQuery}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search..."
                style={{
                    width: '300px',        // Width of the search bar
                    padding: '10px',        // Padding inside the search bar
                    borderRadius: '20px',   // Rounded edges
                    border: '1px solid #ccc', // Border style
                    outline: 'none',
                }}
            />
            <button
                type="submit"
                style={{
                    marginLeft: '10px',     // Space between input and button
                    padding: '10px',
                    borderRadius: '20px',   // Rounded edges for the button
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;
