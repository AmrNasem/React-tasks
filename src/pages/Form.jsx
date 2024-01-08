import React, { useState } from "react";
import Task from "../components/Task";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (name.trim() === "") {
      console.log("Name is required");
      valid = false;
    }
    if (password.trim() === "") {
      console.log("Password is required");
      valid = false;
    }
    if (email.trim() === "") {
      console.log("Email is required");
      valid = false;
    }
    if (phone.trim() === "") {
      console.log("Phone is required");
      valid = false;
    }
    if (gender.trim() === "") {
      console.log("Gender is required");
      valid = false;
    }
    if (language.trim() === "") {
      console.log("Language is required");
      valid = false;
    }
    if (!valid) return;

    console.log("Submitted Successfully");
    console.log("Name: ", name);
    console.log("Password: ", password);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Gender: ", gender);
    console.log("Language: ", language);
  };

  return (
    <Task title="Form task">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="d-block my-2 outline-none p-2 w-100"
          onChange={(e) => setName(e.target.value)}
          name="name"
          value={name}
          placeholder="Enter your name"
        />
        <input
          type="password"
          className="d-block my-2 outline-none p-2 w-100"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
          placeholder="Enter your password"
        />
        <input
          type="email"
          className="d-block my-2 outline-none p-2 w-100"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
          placeholder="Enter your email"
        />
        <input
          type="tel"
          className="d-block my-2 outline-none p-2 w-100"
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          value={phone}
          placeholder="Enter your phone"
        />
        <div>
          <label htmlFor="male">Male</label>
          <input
            onChange={(e) => setGender(e.target.value)}
            className="d-inline-block mx-2"
            type="radio"
            checked={gender === "male"}
            name="gender"
            id="male"
            value="male"
          />
          <label htmlFor="female">Female</label>
          <input
            onChange={(e) => setGender(e.target.value)}
            className="d-inline-block mx-2"
            type="radio"
            checked={gender === "female"}
            name="gender"
            id="female"
            value="female"
          />
        </div>
        <select
          onChange={(e) => setLanguage(e.target.value)}
          className="outline-none p-2 my-2 w-100 d-block"
          value={language}
          name="language"
          id=""
        >
          <option value="">Please check lanuage</option>
          <option value="arabic">Arabic</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
        <button className="d-block p-2 w-100 m-0" type="submit">
          Submit
        </button>
      </form>
    </Task>
  );
};

export default Form;
