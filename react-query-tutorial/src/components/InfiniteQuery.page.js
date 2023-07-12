import axios from "axios";
import React from "react";
import { useInfiniteQuery } from "react-query";

const InfiniteQueryPage = () => {
  const fetchColors = ({ pageParam = 1 }) => {
    return axios.get(
      `http://localhost:4000/colors?_limit=2&_page=${pageParam}`
    );
  };

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(["infinte-query"], fetchColors, {
      getNextPageParam: (lastPage, pages) => {
        console.log(
          "Inside getNextPageParam lastPage: ",
          lastPage + " pages: ",
          pages
        );
        if (pages.length < 5) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  console.log("Data is ", data);
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <>
      <div>
        {data?.pages.map((group) => {
          return group?.data.map((color) => {
            return (
              <h2 key={color.id}>
                Button id is {color.id} and color is {color.color}
              </h2>
            );
          });
        })}
        {isFetchingNextPage && <div>Loading More...</div>}
        <div>
          <button onClick={fetchNextPage} disabled={!hasNextPage}>
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default InfiniteQueryPage;
