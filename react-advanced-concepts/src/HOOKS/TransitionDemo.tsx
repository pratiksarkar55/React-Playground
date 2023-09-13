import React, { ChangeEvent, useState, useTransition } from "react";

const TransitionDemo = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState<number[]>([]);
  const [isPending, startTransition] = useTransition();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    startTransition(() => {
      // gets lower priority so seState happens later
      setItems((prev) => {
        prev = [];
        for (let i = 0; i < 10000; i++) {
          prev.push(i);
        }
        return prev;
      });
    });
  };
  console.log("rendering!!", text);
  console.log("isPending!!", isPending);
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      {items.map((item, i) => {
        return <div key={i}>{item}</div>;
      })}
    </div>
  );
};

export default TransitionDemo;
