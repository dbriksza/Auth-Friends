import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const AddFriend = () => {
  const [newFriend, setNewFriend] = useState({ name: "", age: "", email: "" });

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => setNewFriend({ ...newFriend, name: "", age: "", email: "" }))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={newFriend.name}
        placeholder="Buddy's name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={newFriend.age}
        placeholder="Palio's age"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={newFriend.email}
        placeholder="Friend's email"
        onChange={handleChange}
      />
      <button type="submit">Add 'em to the list!</button>
    </form>
  );
};

export default AddFriend;
