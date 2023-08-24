import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const { loading, users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {!loading &&
        users.length > 0 &&
        users.map((user, index) => {
          return <h2 key={index}>{user}</h2>;
        })}
      {!loading && error && <h2>{error}</h2>}
    </div>
  );
};

export default UserView;
