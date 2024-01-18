import React, { memo, useState } from "react";
import Modal from "../UI/Modal";
import { backend } from "../App";
import { toast } from "react-toastify";

const Form = ({ onClick, editing, setUsers }) => {
  const [username, setUsername] = useState(editing ? editing.username : "");
  const [email, setEmail] = useState(editing ? editing.email : "");
  const [country, setCountry] = useState(editing ? editing.country : "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) toast.error("Username is required");
    else if (!email.trim()) toast.error("Email is required");
    else if (!country.trim()) toast.error("Country is required");
    else {
      setLoading(true);
      fetch(`${backend}/users/${editing ? editing.id : ""}`, {
        method: editing ? "PUT" : "POST",
        body: JSON.stringify({ username, email, country }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setUsers((prevState) => {
            if (editing)
              return prevState.map((user) => {
                if (user.id === data.id) return data;
                return user;
              });
            else return [...prevState, data];
          });
          toast.success(
            `User was ${editing ? "edited" : "added"} successfully!`
          );
          onClick();
        })
        .catch(() => {
          setLoading(false);
          toast.error(`Unable to ${editing ? "edit" : "add"} user :(`);
        });
    }
  };

  return (
    <Modal onClick={onClick}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white position-relative top-50 start-50 translate-middle py-3 px-4 rounded-2"
        style={{ maxWidth: "600px" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="mb-0">{editing ? "Edit" : "New"} user</h3>
          <button onClick={onClick} className="btn border-0 fs-4 fw-bold">
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-75 mx-auto my-4">
            <input
              type="text"
              className="form-control my-3"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              autoFocus
            />
            <input
              type="email"
              className="form-control my-3"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <select
              name="country"
              className="my-3 form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select country</option>
              <option value="Egypt">Egypt</option>
              <option value="England">England</option>
              <option value="Germany">Germany</option>
              <option value="Spain">Spain</option>
            </select>
          </div>
          <div className="text-end">
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary me-3"
            >
              {editing
                ? loading
                  ? "Editing..."
                  : "Edit"
                : loading
                ? "Adding..."
                : "Add"}
            </button>
            <button
              onClick={onClick}
              type="button"
              className="btn border-primary text-primary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default memo(Form);
