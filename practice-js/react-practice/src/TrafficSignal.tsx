import React, { useEffect, useState } from "react";
const colors = [
  { name: "red", time: 4000 },
  { name: "yellow", time: 1500 },
  { name: "green", time: 3000 },
];
const TrafficSignal = () => {
  const [color, setColor] = useState(colors[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (index === 2) {
        setColor(colors[0]);
        setIndex(0);
      } else {
        setColor(colors[index + 1]);
        setIndex(index + 1);
      }
    }, color.time);

    return () => {
      clearTimeout(id);
    };
  }, [index]);

  return (
    <>
      <div style={{ color: color.name }}>Color is {color.name}</div>
    </>
  );
};

export default TrafficSignal;
