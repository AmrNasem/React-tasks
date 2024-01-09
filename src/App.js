import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./pages/Contacts";
import CounterList from "./pages/CounterList";
import Form from "./pages/Form";
import Layout from "./UI/Layout";
import SingleContactPage from "./pages/SingleContactPage";
import Dashboard from "./pages/project/Dashboard";
import Login from "./pages/project/Login";
import Signup from "./pages/project/Signup";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { userActions } from "./store/user-slice";

export const backend = "http://localhost:8000";

function App() {
  const authedUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [loginBack, setLoginBack] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      if (new Date() - user.loginDate > 1000 * 60 * 60 * 24)
        localStorage.removeItem("user");
      else dispatch(userActions.login(user.data));
    }
    setLoginBack(false);
  }, [dispatch]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<h2 className="text-center">Home page</h2>}
          />
          <Route path="/counter" element={<CounterList />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/:contactId" element={<SingleContactPage />} />
          <Route path="/form" element={<Form />} />
          {!loginBack && (
            <Route path="/project">
              <Route
                path=""
                element={authedUser ? <Dashboard /> : <Navigate to="login" />}
              />
              {!authedUser && (
                <>
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Signup />} />
                </>
              )}
            </Route>
          )}
          <Route
            path="*"
            element={
              loginBack ? <h3>Fallback loading...</h3> : <h2>Not found</h2>
            }
          />
        </Routes>
      </Layout>
      <ToastContainer />
    </div>
  );
}

export default App;
