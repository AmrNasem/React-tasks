import React, { memo, useState } from "react";
import { backend } from "../App";
import { toast } from "react-toastify";

const SingleUser = ({
  id,
  username,
  email,
  country,
  setIsEditing,
  setUsers,
}) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = () => {
    setLoading(true);
    fetch(`${backend}/users/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ username, email, country }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUsers((prevState) =>
          prevState.filter((user) => user.id !== data.id)
        );
        toast.success(`User was deleted successfully!`);
      })
      .catch(() => {
        setLoading(false);
        toast.error(`Unable to delete user :(`);
      });
  };
  return (
    <tr>
      <td>{username}</td>
      <td>{email}</td>
      <td>{country}</td>
      <td>
        <button
          onClick={() => setIsEditing({ id, username, email, country })}
          className="bg-transparent border-0 text-success fw-semibold"
        >
          Edit
        </button>
      </td>
      <td>
        <button
          disabled={loading}
          onClick={handleDelete}
          className="bg-transparent border-0 text-danger fw-semibold"
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
      </td>
    </tr>
  );
};

export default memo(SingleUser);
