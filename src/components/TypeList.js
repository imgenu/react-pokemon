import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loadSelectdType } from "../actions/typesAction";
import { dataList } from "../util";
const TypeList = ({ setLikeStatus }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const { types, favorite } = useSelector((state) => state.types);
  const [activeColor, setActiveColor] = useState("");

  const typeHandler = (type, index) => {
    dispatch(loadSelectdType(type, favorite));
    setCurrentIndex(index);
    setActiveColor(dataList[type].color);
    setLikeStatus(false);
  };

  useEffect(() => {
    if (types.length > 0) {
      setActiveColor(dataList[types[0].name].color);
    }
  }, [types]);

  return (
    <TypeStyled activeColor={activeColor}>
      <ul>
        {types
          .filter((type) => type.name !== "unknown")
          .map((type, index) => (
            <PokemonStyled
              className={currentIndex === index ? "active" : ""}
              onClick={() => typeHandler(type.name, index)}
              key={type.id}
            >
              <img src={require(`../icons/${type.name}.png`).default} />
              <p>{dataList[type.name].name}</p>
            </PokemonStyled>
          ))}
      </ul>
    </TypeStyled>
  );
};

const TypeStyled = styled(motion.div)`
  padding: 1rem;
  justify-content: center;
  background: #000;

  ul {
    height: 13vh;
    display: flex;
    overflow-x: scroll;
    flex-wrap: nowrap;
    align-items: center;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .active {
    font-size: 20px;
    background: ${(props) => props.activeColor};
    color: #000;
  }
`;
const PokemonStyled = styled(motion.div)`
  list-style-type: none;
  margin-left: 0.5rem;
  padding: 0.2rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1 0 5rem;
  border-radius: 50%;
  height: 5rem;
  font-weight: bold;
  color: #fff;
`;

export default TypeList;
