import React, { useState } from "react";
import { useAddSuperHero } from "../hooks/useSuperHeroData";

const MutationQueryPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const { mutate } = useAddSuperHero();
  const addHandler = () => {
    mutate({
      name,
      alterEgo,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        value={alterEgo}
        onChange={(e) => {
          setAlterEgo(e.target.value);
        }}
      />
      <button type="button" onClick={addHandler}>
        Add SuperHero
      </button>
    </div>
  );
};

export default MutationQueryPage;
