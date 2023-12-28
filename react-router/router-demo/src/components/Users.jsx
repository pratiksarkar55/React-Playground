import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //console.log(searchParams);
  const showActiveUsers = searchParams.get("filter") === "active";
  console.log(showActiveUsers);
  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet />
      <button
        onClick={() => {
          setSearchParams({ filter: "active" });
        }}
      >
        Active Users
      </button>
      <button
        onClick={() => {
          setSearchParams({});
        }}
      >
        Reset Filter
      </button>
    </div>
  );
};

export default Users;
