import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
const fetchClient = () => {
  return axios.get("http://localhost:4000/client");
};

const fetchStackByClient = (email) => {
  return axios.get("http://localhost:4000/techStack/" + email);
};

const DependentQueryPage = ({ email }) => {
  const { data: clientData } = useQuery("get-client", () => fetchClient());
  const id = clientData?.data.id; // useQuery RE-RENDERS THE COMPONENT WHEN WE GET/PREFETCH THE DATA.
  const { data } = useQuery(
    "get-stack-by-client",
    () => fetchStackByClient(id),
    {
      enabled: !!id,
    }
  );
  console.log(data);
  return (
    <div>
      Stack of {id} is {data?.data.stack}
    </div>
  );
};

export default DependentQueryPage;
