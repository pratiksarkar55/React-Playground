import React, {
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

const DeferedValueDemo = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([
    { id: "1", title: "Pratik" },
  ]);

  const deferredSearchQuery = useDeferredValue(searchQuery);
  useEffect(() => {
    setTimeout(() => {
      let obj = { id: "2", title: deferredSearchQuery };
      if (deferredSearchQuery !== "") setSearchResults([...searchResults, obj]);
    }, 3000);
  }, [deferredSearchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  console.log("deferredSearchQuery", deferredSearchQuery);
  console.log("searchQuery", searchQuery);
  return (
    <div>
      <input
        type="text"
        value={deferredSearchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeferedValueDemo;
