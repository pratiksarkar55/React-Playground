import {
  Api,
  BaseQueryApi,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../../features/auth/authSlice";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { State } from "../../types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3500",
  credentials: "include",
  prepareHeaders: (
    headers: Headers,
    {
      getState,
    }: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">
  ) => {
    //appended bearer token to headers
    const token = (getState() as State).auth.token;
    if (token) {
      headers.set("authorization", "Bearer " + token);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any) => {
  let result: QueryReturnValue<
    unknown,
    FetchBaseQueryError,
    FetchBaseQueryMeta
  > = await baseQuery(args, api, extraOptions);

  // if accessToken expires
  if (result?.error?.status === 403) {
    console.log("sending refresh token to get new access token");
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);

    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      //store new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      //retry with new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // if error is anything else other than 403,then logout
      api.dispatch(logout(api.getState()));
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
