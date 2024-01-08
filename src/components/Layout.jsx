import React from "react";
import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <>
      <header className="px-10 py-3 d-flex gap-3 align-items-center justify-content-between ">
        <h1>
          <Link to="/" className="text-decoration-none text-black">
            Tasks
          </Link>
        </h1>
        <nav>
          <ul className="d-flex gap-3">
            <li>
              <Link
                className="text-decoration-none text-turquiose"
                to="/counter"
              >
                Counter
              </Link>
            </li>
            <li>
              <Link
                className="text-decoration-none text-turquiose"
                to="/contacts"
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-turquiose" to="/form">
                Form
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="px-10">{children}</main>
    </>
  );
};

export default Layout;
