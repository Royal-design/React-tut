import { useDeferredValue, useState, useTransition } from "react";

export const Example1 = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();
  const deferredValue = useDeferredValue(count);

  const handleClick = () => {
    setCount((prev) => prev + 1);

    startTransition(() => {
      const myArray = Array(1000)
        .fill(1)
        .map((el, i) => count + 1000 - i);
      setItems(myArray);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
      {isPending ? <p>loading....</p> : null}
      <p>Deferred Count: {deferredValue}</p>
      {items.map((item) => (
        <ul>
          <li key={item}>{item}</li>
        </ul>
      ))}
    </div>
  );
};
