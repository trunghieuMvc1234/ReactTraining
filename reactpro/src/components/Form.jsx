import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [name1, setName1] = useState({ firstname: "", lastName: "" });
  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(name1.firstname + " " + name1.lastName);
  }
  return (
    <div>
      <h2>lession 25 - Handling Input Fields In React</h2>
      {name}
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
      <h2>lession 26- Handling Multiple Inputs In React</h2>
      <h2>lession 27- Handling Form Submission In React</h2>
      {name1.firstname}-{name1.lastName}
      <form>
        <input
          onChange={(e) => setName1({ ...name1, firstname: e.target.value })}
          type="text"
          value={name1.firstname}
        />
        <input
          type="text"
          onChange={(e) => setName1({ ...name1, lastName: e.target.value })}
          value={name1.lastName}
        />
        <button onClick={(e) => handleSubmitForm(e)}>Submit Form</button>
      </form>
    </div>
  );
}
