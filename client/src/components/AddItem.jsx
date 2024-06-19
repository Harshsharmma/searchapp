import React, { useState } from "react";
import axios from "axios";

const AddItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name,
      description,
    };

    try {
      const response = await axios.post(
        "http://5000/search/add",
        newItem
      );
      console.log(response.data);
      setName("");
      setDescription("");
    } catch (error) {
      console.error("There was an error adding the item!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
