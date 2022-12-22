import React from "react";

function AddUser(props) {

  return (
    <div>
        <br></br>
      <h2>Add a Contact</h2>
      <div className="form-container">
        <form>
          <input
            type="text"
            name="name"
            required="required"
            placeholder="Enter a name"
          />
          <input
            type="text"
            name="surname"
            required="required"
            placeholder="Enter a surname"
          />
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter a email"
          />
          <input
            type="text"
            name="age"
            required="required"
            placeholder="Enter a age"
          />
          <button
            type="submit"
            className="h-13 bg-green-500 hover:bg-green-600 text-white py-2 px-7 rounded"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
