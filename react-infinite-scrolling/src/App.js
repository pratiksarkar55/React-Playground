import { useState, useRef, useCallback } from "react";
import useBookSearch from "./useBookSearch";
import DatePicker from "./components/Datepicker";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { books, error, hasMore, loading } = useBookSearch(query, pageNumber);
  const observer = useRef(); //using ref to store document status in between state renders
  //important concept with refs.
  const lastbookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          //isIntersecting means if it's visible
          setPageNumber(pageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <div>
      {/* <input type="text" value={query} onChange={handleSearch} />
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div ref={lastbookElementRef} key={book}>
              {book}
            </div>
          );
        } else return <div key={book}>{book}</div>;
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error..."}</div> */}
      <DatePicker />
    </div>
  );
}

export default App;
