"use client"
import React, { useState, useMemo } from 'react';



export default function UserSearch({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [counter, setCounter] = useState(0);

  // Memoize the filtered user list based on the search term
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(prev => prev + 1)}>Increment Counter</button>

      <h2>Search Users</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter name"
      />

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}