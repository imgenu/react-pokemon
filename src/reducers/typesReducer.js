const initialState = {
  types: [],
  pokemons: [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  isLoading: true,
};

export const typesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TYPE":
      return {
        ...state,
        types: action.payload.types,
        pokemons: action.payload.pokemons,
      };
    case "FETCH_SELECTED":
      return {
        ...state,
        pokemons: action.payload.pokemons,
        isLoading: true,
      };
    case "MAP_FAVORITELIST":
      return {
        ...state,
        pokemons: action.payload.pokemons,
      };
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        favorite: action.payload.favorite,
      };
    case "LOADING_POKEMON":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
