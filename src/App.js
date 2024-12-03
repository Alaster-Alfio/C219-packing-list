import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
    { id: 1, description: "Shirt", quantity: 5, packed: false },
    { id: 2, description: "Pants", quantity: 2, packed: true },
];

function App() {
    const [items, setItems] = useState(initialItems);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleTogglePacked = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    };

    const handleDeleteItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAddItem} />
            <PackingList
                items={items}
                onTogglePacked={handleTogglePacked}
                onDeleteItem={handleDeleteItem}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
