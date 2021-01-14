import { useState } from "react";

export const useSwitch = (secondSearch: string) => {
  const [searchBy, setSearchBy] = useState("name");

  const handleSwitch = () => {
    setSearchBy(searchBy === "name" ? secondSearch : "name");
  };

  return { searchBy, setSearchBy, handleSwitch };
};
