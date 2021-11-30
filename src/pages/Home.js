import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, transform } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loadType } from "../actions/typesAction";
import TypeList from "../components/TypeList";
import Pokemon from "../components/Pokemon";
import { mapPokemonFavorite } from "../actions/typesAction";
import pokeBall from "../icons/pokeball.png";
import LoadingIcon from "../icons/spinner-solid.svg";
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
        isLoading && (
          <Main>
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
        )
      ) : (
        <Loading>
          <motion.img
            animate={animation}
            transition={transition}
            src={LoadingIcon}
          />
          <h3>Loading</h3>
        </Loading>
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
    width: 95%;
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
  height: 80vh;
  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
  }
`;
const FavoriteListStyled = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: scroll;
  height: 90vh;
  position: absolute;
  right: 0%;
  top: 0%;
  background: white;
  width: 100%;
  opacity: ${(props) => (props.likeStatus ? 1 : 0)};
  transition: all 1s ease-in-out;
  transform: ${(props) =>
    props.likeStatus ? "translateX(0%)" : "translateX(300%)"};
  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
  }
`;
const FavoriteButton = styled(motion.button)`
  position: fixed;
  z-index: 100;
  top: 15%;
  right: 10%;
  height: 3rem;
  background: none;
  border: none;
  img {
    width: 5rem;
  }
  @media screen and (max-width: 768px) {
    top: 14%;
    right: 0%;
  }
`;
const Loading = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-basis: 80vh;
  justify-content: center;
  align-items: center;

  img {
    width: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
  }
`;
const animation = {
  rotate: [0, 360],
};
const transition = {
  duration: 1,
  ease: "easeInOut",
  loop: Infinity,
};
export default Home;
