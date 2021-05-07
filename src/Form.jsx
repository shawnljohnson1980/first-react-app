import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmai] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConirmPassword] = useState("");
  const formData = (e) => {
    e.preventDefault();
    console.log(e.target[1].value);
  };
  return (
    <>
      <form
        onSubmit={formData}
        class="border border-rounded border-white shadow p-4"
        action=""
        method="post"
      >
        <form-group mt-3>
          <label htmlFor="date">Date:</label>
          <input
            className="shadow border border-rounded border-white"
            type="birthday"
            name="date"
            placeholder="datetime.today"
          />
        </form-group>
        <br></br>
        <form-group>
          <label htmlFor="firstName">First Name:</label>
          <input
            className="shadow border border-rounded border-white "
            type="text"
            name="firstName"
            placeholder="First Name"
          />
        </form-group>
        <form-group>
          <label htmlFor="Last Name">Last Name:</label>
          <input
            className="shadow border border-rounded border-white "
            type="text"
            name="firstName"
            placeholder="lastName"
          />
        </form-group>
        <form-group>
          <label htmlFor="email">Name:</label>
          <input
            className="shadow border border-rounded border-white "
            type="text"
            name="email"
            placeholder="email"
          />
        </form-group>
        <form-group>
          <label htmlFor="password">Password:</label>
          <input
            className="shadow border border-rounded border-white"
            type="text"
            name="password"
            placeholder="your password"
          />
        </form-group>
        <form-group>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className="shadow border border-rounded border-white"
            type="text"
            name="confirmPassword"
            placeholder="your password"
          />
        </form-group>
        <form-group>
          <input
            className="shadow border border-rounded border-white btn btn-primary mt-3 mb-4"
            type="button"
            value="submit"
          />
        </form-group>
      </form>
    </>
  );
};
export default Form;
