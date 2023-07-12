import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSucess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    cacheTime: 5000,
    // default cache time is 5 minutes
    /** Caching start time applies from when the cache is in inactive stage**/
    /**isLoading is false when data is fetched from cache. **/

    staleTime: 30000,
    /**
     * Default Stale time is 0 seconds
     * Till the stale time limit is reached as long as data is cached the background call is not made(isFetching flag is always false)
     * Useful for limiting api calls.
     **/

    refetchOnMount: false,
    // calls the background api to check if data is changed from cache(isFetching:true) on component mount.
    //refetchOnMount will work as true only if the query is in stale state(staletime exceeds).

    refetchOnWindowFocus: false,
    // calls the background api to check if data is changed from cache(isFetching:true) on change of browser focus.
    // refetchOnWindowFocus will work as true only if the query is in stale state(staletime exceeds).

    //refetchInterval: 2000, // refetches on every interval.Even when statleTime is not exceeded.Default is false/0.

    // refetchIntervalInBackground: false, // refetches on interval when browswer is closed.
    enabled: true,
    onSuccess: onSucess,
    onError: onError,
    // select: (data) => {
    //   const superHeroes = data.data.map((hero) => hero.name);
    //   return superHeroes;
    // },

    //keepPreviousData : true,// USEFUL IN PAGINATING RECORDS.
  });
};
