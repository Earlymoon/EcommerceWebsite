import { useContext } from "react";
import { createContext } from "react";
import { useProductContext } from "./productcontext";
import { useReducer } from "react";
import { useEffect } from "react";

import reducer from "../reducer/filterReducers";
const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "All",
    company: "All",
    color: "All",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  console.log(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  //   to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  //  sorting functiom
  const sorting = (event) => {
    let userValue = event.target.value;

    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // updateFilter
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  // clear the filters
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  //to sort the product
  useEffect(() => {
    dispatch({ type: "UPDATE_FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
