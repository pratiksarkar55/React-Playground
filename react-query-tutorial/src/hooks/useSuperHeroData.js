import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const addSuperHero = (hero) => {
  console.log("Post sucessful ", hero);
  return axios.post(`http://localhost:4000/superheroes`, hero);
};

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", heroId], () => fetchSuperHero(heroId), {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroId));
      if (hero) {
        return { data: hero };
      } else {
        return undefined; //REACT DOES HARD RELOAD.WHAT DOES IT MEAN???
      }
    },
  });
};

export const useAddSuperHero = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    // console.log("success");
    // queryClient.invalidateQueries("super-heroes");
    // On successful mutation an automatic background fetch is made.ONLY IF THE QUERY IS IN THE QUERY CACHE.
    // queryClient.setQueryData("super-heroes", (oldQueryData) => {
    //   return {
    //     ...oldQueryData,
    //     data: [...oldQueryData.data, data.data],
    //   };
    // });
    // setQueryData helps us to mutate exisitng query data with newly added data.So no extra API call is needed like invalidateQueries().
    //},

    //OPTIMISTIC UPDATES- Update the query cache before update at the backend with the hope it will work.
    // Used for faster optimization of UI.
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes"); //cancel any prefetch queries
      const previousHeroData = queryClient.getQueryData("super-heroes"); // Rollback data if mutatation fails
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return {
        previousHeroData,
      };
    },
    // OnMutate is called before the mutation happens

    onError: (_error, _hero, context) => {
      queryClient.setQueryData("super-heroes", context.previousHeroData);
    },
    // On error gets the rollback data from context which contains query cache value passed in onMtuate().

    onSettled: () => {
      //queryClient.setQueryData("super-heroes");
    },
    //onSettled is called after mutation is successful/failed to sync the client data with server.
  });
};
