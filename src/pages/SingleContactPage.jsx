import React from "react";
import { useParams } from "react-router-dom";

const SingleContactPage = () => {
  const { contactId } = useParams();
  return <h2>This is the dynamic contact with id: {contactId}</h2>;
};

export default SingleContactPage;
