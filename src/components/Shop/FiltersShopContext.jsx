import React, { useContext, useState, createContext } from "react";

export const FilterContextShop = createContext();

const FilterShopProvider = ({ children }) => {
  const [shopFilters, setShopFilters] = useState({
    category: "",
    min: 0,
    max: 0,
    size: 10,
    page: 1,
    letra: "",
  });
  return (
    <FilterContextShop.Provider value={{ shopFilters, setShopFilters }}>
      {children}
    </FilterContextShop.Provider>
  );
};

export const useFilterShop = () => {
  const context = useContext(FilterContextShop);
  console.log(context);
  return context;
};

export default FilterShopProvider;
