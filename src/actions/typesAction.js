import axios from "axios";
import {
  allTypesURL,
  selectedTypeUrl,
  getPokemon,
  getChineseName,
} from "../api";

const loadPokemons = async (pokemonType) => {
  const pokemons = await Promise.all(
    pokemonType.data.pokemon.map(async (item) => {
      const pokemonDetail = await axios
        .get(getPokemon(item.pokemon.name))
        .then((data) => data)
        .catch((err) => err);

      const {
        id,
        name,
        sprites: { front_default },
        types,
      } = pokemonDetail.data;

      const fetchChineseName = await axios
        .get(getChineseName(id))
        .then((data) => data)
        .catch((err) => err);

      let chineseName = name;
      if (fetchChineseName.status === 200) {
        chineseName = fetchChineseName.data.names.filter(
          (name) => name.language.name === "zh-Hant"
        )[0].name;
      }
      const pokemon = {
        id,
        name: chineseName || name,
        image: front_default,
        types: types,
        isFavorite: false,
      };
      return pokemon;
    })
  );
  return pokemons;
};
export const getInitailData = () => async (dispatch) => {};
export const loadType = () => async (dispatch) => {
  const typesData = await axios.get(allTypesURL());
  const defaultType = typesData.data.results[0].name;
  const selectedTypeData = await axios.get(selectedTypeUrl(defaultType));
  const pokemons = await loadPokemons(selectedTypeData);

  dispatch({
    type: "FETCH_TYPE",
    payload: {
      types: typesData.data.results,
      pokemons: pokemons,
    },
  });

  if (JSON.parse(localStorage.getItem("favorite"))) {
    dispatch(
      mapPokemonFavorite(pokemons, JSON.parse(localStorage.getItem("favorite")))
    );
  }
};
export const mapPokemonFavorite = (pokemonList, favoriteList) => (dispatch) => {
  if (favoriteList.length === 0) return;

  let pokemon = favoriteList.reduce(
    (prev, cur) => {
      const target = prev.find((e) => e.id === cur.id);

      if (target) {
        Object.assign(target, cur);
      } else {
        // prev.push(cur);
      }
      return prev;
    },
    [...pokemonList]
  );
  dispatch({
    type: "MAP_FAVORITELIST",
    payload: {
      pokemons: pokemon,
    },
  });
  // localStorage.setItem("pokemons", JSON.stringify(pokemon));
};
export const loadSelectdType =
  (type_name, favoriteList) => async (dispatch) => {
    dispatch({
      type: "LOADING_POKEMON",
    });
    const selectedTypeData = await axios.get(selectedTypeUrl(type_name));
    const pokemons = await loadPokemons(selectedTypeData);

    dispatch({
      type: "FETCH_SELECTED",
      payload: {
        pokemons: pokemons,
      },
    });

    if (favoriteList.length > 0) {
      dispatch(mapPokemonFavorite(pokemons, favoriteList));
    }
  };

export const toggleFavorite = (favoriteList, pokemon) => async (dispatch) => {
  const { id, isFavorite } = pokemon;

  let list = [...favoriteList];

  const index = list.findIndex((pokemon) => pokemon.id === id);

  if (index >= 0) {
    list[index] = { ...pokemon, isFavorite: !isFavorite };
  } else {
    list = [...favoriteList, { ...pokemon, isFavorite: !isFavorite }];
  }

  dispatch({
    type: "TOGGLE_FAVORITE",
    payload: {
      favorite: list,
    },
  });
  localStorage.setItem("favorite", JSON.stringify(list));
};
