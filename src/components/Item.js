import React from "react";

function Item({ item, onTogglePacked, onDeleteItem }) {
    const itemStyle = {
        textDecoration: item.packed ? "line-through" : "none",
        color: item.packed ? "#999" : "#000",
    };

    return (
        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
                type="checkbox"
                checked={item.packed}
                onChange={() => onTogglePacked(item.id)}
            />
            <span style={itemStyle}>
                {item.quantity} x {item.description}
            </span>
            <button
                onClick={() => onDeleteItem(item.id)}
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "0",
                }}
            >
                <img
                    src="/delete.png"
                    alt="Delete"
                    style={{ width: "20px", height: "20px" }}
                />
            </button>
        </li>
    );
}

export default Item;
