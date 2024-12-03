import React, { useState } from "react";

function Form({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description.trim()) {
            alert("Please enter an item description.");
            return;
        }

        const newItem = {
            id: Date.now(),
            description,
            quantity,
            packed: false,
        };

        onAddItem(newItem);
        setQuantity(1);
        setDescription("");
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need to pack?</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    style={{ padding: "5px", borderRadius: "5px" }}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <input
                    type="text"
                    placeholder="Item..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ flex: "1", padding: "5px", borderRadius: "5px" }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "5px 10px",
                        backgroundColor: "#FFA500",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    ADD
                </button>
            </div>
        </form>
    );
}

export default Form;
