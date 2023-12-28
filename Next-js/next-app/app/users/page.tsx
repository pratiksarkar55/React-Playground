import React from "react";

const UsersPage = async () => {
  // by default next js caches.
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    //cache: "no-store",
    next: { revalidate: 2 },
  });
  const users: any = await res.json();
  return (
    <div>
      {users.map((obj: any, index: number) => {
        return <div key={index}>{obj.name}</div>;
      })}
    </div>
  );
};

export default UsersPage;
