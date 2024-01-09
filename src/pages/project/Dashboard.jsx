import React, { useCallback, useEffect, useState } from "react";
import SingleUser from "../../components/SingleUser";
import Form from "../../components/Form";
import { toast } from "react-toastify";
import { backend } from "../../App";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${backend}/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Unable to get the users :(");
        setLoading(false);
      });
  }, []);

  const handleFormClosure = useCallback(() => {
    setFormIsOpen(false);
    setIsEditing(null);
  }, []);

  return (
    <div
      className="d-flex gap-3 flex-wrap align-items-start"
      style={{ minHeight: "calc(100vh - 88px)" }}
    >
      <nav className="bg-light flex-grow-1 special-sticky top-0">
        <h3 className="text-center my-2 p-2">Admin Dashboard</h3>
        <button
          onClick={() => setFormIsOpen(true)}
          className="btn btn-danger my-4 d-block mx-auto"
        >
          Add user
        </button>
        {(formIsOpen || isEditing) && (
          <Form editing={isEditing} onClick={handleFormClosure} />
        )}
      </nav>
      <div style={{ flex: 10 }}>
        <table className="w-100 lined">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <SingleUser key={user.id} setIsEditing={setIsEditing} {...user} />
            ))}
          </tbody>
        </table>
        {loading && <p className="text-center my-4 fw-semibold">Loading...</p>}
      </div>
    </div>
  );
};

export default Dashboard;
