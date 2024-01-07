import "./App.css";
import Contacts from "./components/Contacts";
import CounterList from "./components/CounterList";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <Task title="Counter task">
        <CounterList />
      </Task>
      <Task title="Contacts task">
        <Contacts />
      </Task>
    </div>
  );
}

export default App;
