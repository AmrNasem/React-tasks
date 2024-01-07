import Counter from "./Counter";

const counters = ["c1", "c2", "c3", "c4"];
const CounterList = () => {
  return (
    <div className="counters">
      {counters.map((c) => (
        <Counter key={c} />
      ))}
    </div>
  );
};

export default CounterList;
