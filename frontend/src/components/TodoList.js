import React, { useState } from "react";

const TodoList = () => {
  const [Task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddToCart = () => {
    if (editingIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editingIndex ? { ...item, Task } : item
      );
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      const newItem = { Task };
      setItems([...items, newItem]);
    }

    setTask("");
  };

  const handleEdit = (index) => {
    const item = items[index];
    setTask(item.Task);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <>
    <div class="shape1">
        </div>
        <div class="shape2">
        </div>
    <div className="Form">
       
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Add Your Task"
        value={Task}
        onChange={(e) => setTask(e.target.value)}
        style={{ width: "80%", borderRadius: "50px" }}
      />
      <button onClick={handleAddToCart} className="button">
        {editingIndex !== null ? "Update Product" : "Add to Cart"}
      </button>
      {items.length === 0 ? (
        <h3 style={{ textAlign: "center", paddingTop: "20px" }}>No Products</h3>
      ) : (
        items.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-info">
              <h3>{item.Task}</h3>
            </div>
            <div className="product-buttons">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default TodoList;
