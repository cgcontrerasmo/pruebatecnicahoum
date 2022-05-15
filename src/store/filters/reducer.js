const initialState = {
  filters: {
    searchWord: "",
    region: "",
    language: "",
    include_adult: false,
  },
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FILTERS":
      return {
        ...state,
        filters: action.payload.filters,
      };
    case "RESET_FILTERS":
      return {
        filters: {
          searchWord: "",
          region: "",
          language: "",
          include_adult: false,
        },
      };
    default:
      return state;
  }
};
