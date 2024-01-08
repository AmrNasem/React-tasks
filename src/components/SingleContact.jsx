import React, { memo } from "react";
import { Link } from "react-router-dom";

const SingleContact = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <tr>
      <td>
        <Link to={props.id}>{props.name}</Link>
      </td>
      <td>{props.phone}</td>
      <td>{props.address}</td>
      <td>
        <button
          style={{
            color: "red",
            border: "none",
            backgroundColor: "transparent",
          }}
          onClick={deleteHandler}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default memo(SingleContact);
