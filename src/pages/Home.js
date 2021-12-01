import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loadType } from "../actions/typesAction";
import TypeList from "../components/TypeList";
import Pokemon from "../components/Pokemon";
import { mapPokemonFavorite } from "../actions/typesAction";
import { Loading, Nodata } from "../components/DataInfo";
import pokeBall from "../icons/pokeball.png";

const Home = () => {
  const dispatch = useDispatch();
  const { pokemons, favorite, isLoading } = useSelector((state) => state.types);
  const [likeStatus, setLikeStatus] = useState(false);

  const favoriteList = favorite.filter(
    (pokemon) => pokemon.isFavorite === true
  );

  useEffect(() => {
    dispatch(mapPokemonFavorite(pokemons, favorite));
  }, [favorite]);
  useEffect(() => {
    dispatch(loadType());
  }, []);
  return (
    <HomeStyled>
      <TypeList setLikeStatus={setLikeStatus} />
      {isLoading ? (
        <Main>
          {!pokemons.length && <Nodata />}
          <PokemonListStyled>
            {pokemons.map((pokemon) => (
              <Pokemon
                key={pokemon.id}
                favoriteList={favorite}
                pokemon={pokemon}
              />
            ))}
          </PokemonListStyled>
          <FavoriteListStyled likeStatus={likeStatus}>
            {!favoriteList.length && <Nodata />}
            {favoriteList.map((pokemon) => (
              <Pokemon
                key={pokemon.id}
                favoriteList={favorite}
                pokemon={pokemon}
              />
            ))}
          </FavoriteListStyled>
          <FavoriteButton onClick={() => setLikeStatus(!likeStatus)}>
            <img src={pokeBall} />
          </FavoriteButton>
        </Main>
      ) : (
        <Loading></Loading>
      )}
    </HomeStyled>
  );
};

const HomeStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Main = styled(motion.div)`
  display: flex;
  position: relative;
`;
const PokemonListStyled = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: scroll;
  height: calc(${window.innerHeight}px - 13vh - 2rem);
  background: #fbe300;
  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
  }
`;
const FavoriteListStyled = styled(PokemonListStyled)`
  position: absolute;
  right: 0%;
  top: 0%;
  width: 100%;
  opacity: ${(props) => (props.likeStatus ? 1 : 0)};
  transition: all 1s ease-in-out;
  transform: ${(props) =>
    props.likeStatus ? "translateX(0%)" : "translateX(300%)"};
`;
const FavoriteButton = styled(motion.button)`
  position: fixed;
  z-index: 100;
  top: 20%;
  right: 10%;
  height: 3rem;
  background: none;
  border: none;
  height: 5rem;
  img {
    width: 5rem;
    height: 5rem;
  }
  @media screen and (max-width: 768px) {
    top: 17%;
    right: 0%;

    img {
      width: 4.5rem;
      height: 4.5rem;
    }
  }
`;

export default Home;
