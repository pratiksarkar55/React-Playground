import { useQuery } from "react-query";
import axios from "axios";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

export const RQSuperHeroesPage = () => {
  const onSucess = (data) => {
    console.log("Perform side effect after successful data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after error while data fetching", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSucess, onError);
  console.log(`isLoading = ${isLoading} and isFetching =  ${isFetching}`);
  /**isFetching is a flag for background fetch which checks if the original data has changed from the cache.
  It will be true when it compares the cache and original data.Once campared it will be false.
  */
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  {
    if (isError) {
      return <h2>{error.message}</h2>;
    }
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {/* Cache will work during refetch similarly as above.But refetch will make the call each time to check if data has changed */}
      <button onClick={refetch}>Fetch Data</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};
