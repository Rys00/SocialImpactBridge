import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../home-page.module.scss";

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
        <form onSubmit={handleSubmit} style={{width:'100%'}}>
            <input
                type="text"
                value={searchQuery}
                className={styles.searchBar}
                onChange={handleInputChange}
                placeholder="Search For..."

            />

        </form>
    );
}

export default SearchBar;
