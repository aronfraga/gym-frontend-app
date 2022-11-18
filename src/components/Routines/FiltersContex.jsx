import React, { useContext, useState, createContext } from "react";

export const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [routinesFilters, setRoutinesFilters] = useState({
    muscles: [],
    difficulty: [],
    duration: [],
    favourite: 0,
  });
  return (
    <FilterContext.Provider value={{ routinesFilters, setRoutinesFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};

export default FilterProvider;
