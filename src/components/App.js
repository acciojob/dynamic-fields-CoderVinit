import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([{ id: Date.now(), name: "", age: "" }]);

  const handleAddFeild = () => {
    setFields([...fields, { id: Date.now(), name: "", age: "" }]);
  };

  const handleRemoveField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleChange = (id, event) => {
    const { name, value } = event.target;
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, [name]: value } : field
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div className="main">
      {/* Do not remove the main div */}
      <h2>Dynamic Feild Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} className="flex items-center gap-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(field.id, e)}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(field.id, e)}
              required
            />
            {fields.length > 1 && (
              <button type="button" onClick={() => handleRemoveField(field.id)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <div className="btns">
          <button type="button" onClick={handleAddFeild}>
            Add Field
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
