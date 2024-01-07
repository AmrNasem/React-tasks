import React, { memo } from "react";

const SingleContact = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <tr>
      <td>{props.name}</td>
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
