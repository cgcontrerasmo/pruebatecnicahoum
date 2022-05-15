const changeFilters = (payload) => {
  return {
    type: "CHANGE_FILTERS",
    payload: payload,
  };
};

const resetFilters = () => {
  return {
    type: "RESET_FILTERS",
  };
};

export { resetFilters, changeFilters };
