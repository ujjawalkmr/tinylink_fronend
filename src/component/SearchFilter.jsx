import React, { useState } from "react";

const SearchFilterBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilter = () => {
        alert("Filter button clicked!");
        // You can add your filter logic here
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
            }}
        >
            {/* Search Bar */}
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search tasks..."
                style={{ flex: 1, padding: "8px" }}
            />

            {/* Filter Button */}
            <button
                onClick={handleFilter}
                style={{
                    padding: "8px 12px",
                    background: "blue",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                }}
            >
                Filter
            </button>
        </div>
    );
};

export default SearchFilterBar;
