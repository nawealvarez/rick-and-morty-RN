import { useState } from "react";

export const useSwitch = () => {
  const [searchBy, setSearchBy] = useState("name");

  const handleSwitch = () => {
    setSearchBy(searchBy === "name" ? "type" : "name");
  };

  return { searchBy, setSearchBy, handleSwitch };
};
