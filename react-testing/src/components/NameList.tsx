import { useEffect, useState } from "react";
import { useToDo } from "./useToDo";

const NameList = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    useToDo(setData, setLoading);
  }, []);
  console.log("testing data", data);
  console.log("testing loading data", loading);
  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {!loading && data.length > 0 && (
        <ul>
          {data.map((obj, index) => (
            <li key={index}>{obj}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NameList;
