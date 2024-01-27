import React, {
  ChangeEvent,
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

const DeferedValueDemo = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // makes an interuptted background render.So if setSearchQuery is called in between
  // the background render gets interputed and the re-render doesn't happen.
  //Once setSearchQuery is done the background render works.
  const deferredSearchQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    if (searchQuery === deferredSearchQuery && deferredSearchQuery !== "") {
      console.log("netwrok call");
    }
  }, [deferredSearchQuery, searchQuery]);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  // console.log("deferredSearchQuery", deferredSearchQuery);
  // console.log("searchQuery", searchQuery);
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {Array.from({ length: 10000 }, (_, index) => index).map(
          (obj, index) => {
            return <li key={index}>Text:{deferredSearchQuery}</li>;
          }
        )}
      </ul>
    </div>
  );
};

export default DeferedValueDemo;
