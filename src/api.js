import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/";
export const allTypesURL = () => `${baseURL}type`;
export const selectedTypeUrl = (type) => `${baseURL}type/${type}`;
export const getPokemon = (name) => `${baseURL}pokemon/${name}`;
export const getChineseName = (name) => `${baseURL}pokemon-species/${name}`;
