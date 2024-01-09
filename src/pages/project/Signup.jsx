import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { backend } from "../../App";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) toast.error("Username is required");
    else if (!email.trim()) toast.error("Email is required");
    else if (!password.trim()) toast.error("Password is required!");
    else if (!phone.trim()) toast.error("Phone is required!");
    else if (!country.trim()) toast.error("Country is required!");
    else if (!gender.trim()) toast.error("Gender is required!");
    else {
      const signup = async () => {
        try {
          setLoading(true);
          const res = await fetch(`${backend}/admins`, {
            method: "POST",
            body: JSON.stringify({
              username,
              email,
              password,
              phone,
              country,
              gender,
            }),
          });
          if (!res.ok) throw new Error("Something went wrong!");
          toast.success("You signed up successfully");
          navigate("/project/login");
        } catch (err) {
          toast.error(err.message);
        }
        setLoading(false);
      };

      signup();
    }
  };

  return (
    <form
      className="bg-light rounded-4 border mx-auto"
      style={{ maxWidth: "700px" }}
      onSubmit={handleSubmit}
    >
      <h2 className="p-4">Register</h2>
      <div className="bg-white border-top border-bottom p-3">
        <div className="d-flex gap-2 flex-wrap">
          <div className="my-2 flex-grow-1">
            <label htmlFor="username">
              Username <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
            />
          </div>
          <div className="my-2 flex-grow-1">
            <label htmlFor="email">
              Email <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <div className="my-2 flex-grow-1">
            <label htmlFor="password">
              Password <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-2 flex-grow-1">
            <label htmlFor="phone">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="my-2">
          <label htmlFor="country">
            Country <span className="text-danger">*</span>
          </label>
          <select
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="form-control"
            id="country"
          >
            <option value="">Select country</option>
            <option value="Egypt">Egypt</option>
            <option value="England">England</option>
            <option value="German">German</option>
          </select>
        </div>
        <div className="my-2">
          <label>
            Gender: <span className="text-danger">*</span>
          </label>
          <input
            id="male"
            className="mx-2"
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male" ? true : false}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male">Male</label>
          <input
            id="female"
            className="mx-2"
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female" ? true : false}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <div className="p-4">
        <p>
          Already have an account?{" "}
          <Link className="text-primary" to="/project/login">
            Login
          </Link>
        </p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        )}
      </div>
    </form>
  );
};

export default Signup;
