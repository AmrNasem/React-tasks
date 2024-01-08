import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./pages/Contacts";
import CounterList from "./pages/CounterList";
import Form from "./pages/Form";
import Layout from "./components/Layout";
import SingleContactPage from "./pages/SingleContactPage";

function App() {
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
          <Route path="*" element={<h2>Not found</h2>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
