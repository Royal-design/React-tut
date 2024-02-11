import { useDeferredValue, useEffect, useState, useTransition } from "react";

const bigData = [...Array(2000).keys()];

export const Example2 = () => {
  const [isPending, startTransition] = useTransition();

  const [newItem, setNewItems] = useState(bigData);
  const [input, setInput] = useState("");

  const deferredInput = useDeferredValue(input);

  useEffect(() => {
    startTransition(() => {
      const filtered = bigData.filter((item) =>
        item.toString().includes(deferredInput)
      );
      setNewItems(filtered);
    });
  }, [deferredInput]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <section>
        <p>Searching for: {deferredInput || "All"}</p>
        {isPending ? <p>Loading...</p> : null}
        <ul>
          {newItem.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
