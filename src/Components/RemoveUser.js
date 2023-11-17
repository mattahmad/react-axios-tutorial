import React, { useState } from 'react'
import axios from 'axios';
import API from './api.js';

function RemoveUser() {
  const [state, setState] = useState(" ");

  const handleChange = (e) => {
    setState({ id: e.target.value });
  };

  const handleRemove = (evt)=>{
    evt.preventDefault();

       API.delete(`users/${state.id}`)
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
  }

  return (
    <div>
      Remove User
      <div>
        <form onSubmit={handleRemove}>
          <label>
            User ID:
            <input type="number" name="id" onChange={handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default RemoveUser;