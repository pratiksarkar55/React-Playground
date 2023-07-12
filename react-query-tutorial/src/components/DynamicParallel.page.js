import React from "react";
import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((heroId) => {
      return {
        queryKey: ["super-hero", heroId],
        queryFn: () => fetchSuperHero(heroId),
      };
    })
  );
  console.log("data is", queryResults);
  return (
    <div>
      {queryResults &&
        queryResults.map((hero) => {
          return hero.data ? (
            <div key={hero.data.data.id}>{hero.data.data.name}</div>
          ) : null;
        })}
    </div>
  );
};

export default DynamicParallelPage;
