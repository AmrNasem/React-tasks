import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userActions } from "../../store/user-slice";
import { backend } from "../../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) toast.error("Email is required");
    else if (!password.trim()) toast.error("Password is required");
    else {
      const login = async () => {
        try {
          setLoading(true);
          const res = await fetch(`${backend}/admins`);
          if (!res.ok) throw new Error("Something went wrong!");
          const users = await res.json();
          const user = users.find(
            (user) => user.email === email && user.password === password
          );
          if (user) {
            localStorage.setItem(
              "user",
              JSON.stringify({ data: user, loginDate: new Date() })
            );
            dispatch(userActions.login(user));
            toast.success("You logged in successfully");
            navigate("/project");
          } else toast.error("Username or passsword is not valid!");
        } catch (err) {
          toast.error(err.message);
        }
        setLoading(false);
      };

      login();
    }
  };

  return (
    <form
      className="bg-light rounded-4 border mx-auto"
      style={{ maxWidth: "700px" }}
      onSubmit={handleSubmit}
    >
      <h2 className="p-4">Login</h2>
      <div className="bg-white border-top border-bottom p-3">
        <div className="my-2">
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
        <div className="my-2">
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
        <div className="my-2"></div>
      </div>
      <div className="p-4">
        <p>
          Don't have an account?{" "}
          <Link className="text-primary" to="/project/register">
            Register
          </Link>
        </p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        )}
      </div>
    </form>
  );
};

export default Login;
