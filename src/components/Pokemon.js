import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../actions/typesAction";
import heartSolid from "../icons/heart-solid.svg";
import heartRegular from "../icons/heart-regular.svg";
import { dataList } from "../util";

const Pokemon = ({ favoriteList, pokemon }) => {
  const dispatch = useDispatch();
  const { name, image, isFavorite, types } = pokemon;
  console.log(pokemon);
  return (
    <PokemonStyled>
      <div onClick={() => dispatch(toggleFavorite(favoriteList, pokemon))}>
        <img
          className={"icon"}
          src={isFavorite ? heartSolid : heartRegular}
          alt=""
        />
      </div>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <TypeTagList>
        {types.map((type) => {
          const { name } = type.type;
          return (
            <TypeTag
              color={dataList[name].color}
              subColor={dataList[name].subColor}
            >
              {dataList[name].name}
            </TypeTag>
          );
        })}
      </TypeTagList>
    </PokemonStyled>
  );
};

const PokemonStyled = styled(motion.div)`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 0rem 1rem 1rem 1rem;

  margin: 1rem;
  display: flex;
  flex-direction: column;
  flex-basis: 10rem;
  height: 15rem;

  h3 {
    text-align: center;
    flex: 1;
  }

  .icon {
    align-self: flex-end;
    margin: 0.5rem 0;
    width: 1rem;
    height: 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-basis: 9rem;
    height: 14rem;
    margin: 0.8rem;
  }
`;
const TypeTagList = styled(motion.div)`
  display: flex;
`;
const TypeTag = styled(motion.div)`
  display: inline-block;
  border-radius: 10px;
  padding: 0.2rem 0.5rem;
  font-size: 0.5rem;
  margin-right: 0.3rem;
  background: ${(props) => props.subColor};
  border: solid 2px ${(props) => props.color};
`;

export default Pokemon;
