import Counter from "../components/Counter";
import Task from "../components/Task";

const counters = ["c1", "c2", "c3", "c4"];
const CounterList = () => {
  return (
    <Task title="Counter task">
      {counters.map((c) => (
        <Counter key={c} />
      ))}
    </Task>
  );
};

export default CounterList;
