import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const PaginatedQueryPage = () => {
  const [page, setpage] = useState(1);

  const fetchColors = () => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`);
  };

  const { data, isLoading } = useQuery(["paginated-query", page], fetchColors, {
    keepPreviousData: true,
  });

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div>
      {data?.data.map((color) => {
        return (
          <h2 key={color.id}>
            Button id is {color.id} and color is {color.color}
          </h2>
        );
      })}
      <div>
        <button
          onClick={() => {
            setpage(page - 1);
            //refetch();
          }}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setpage(page + 1);
            // refetch();
          }}
          disabled={page === 5}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedQueryPage;
