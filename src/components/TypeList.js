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
    setActiveColor(dataList[type].subColor);
    setLikeStatus(false);
  };

  useEffect(() => {
    if (types.length > 0) {
      setActiveColor(dataList[types[0].name].subColor);
    }
  }, [types]);

  return (
    <TypeStyled activeColor={activeColor}>
      <ul>
        {types
          .filter((type) => type.name !== "unknown")
          .map((type, index) => (
            <PokemonStyled
              color={dataList[type.name].color}
              className={currentIndex === index ? "active" : ""}
              onClick={() => typeHandler(type.name, index)}
              key={type.id}
            >
              <img src={require(`../icons/${type.name}.png`).default} />
              {dataList[type.name].name}
            </PokemonStyled>
          ))}
      </ul>
    </TypeStyled>
  );
};

const TypeStyled = styled(motion.div)`
  padding: 1rem 0;
  justify-content: center;

  ul {
    height: 12vh;
    display: flex;
    overflow-x: scroll;
    flex-wrap: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .active {
    font-size: 20px;
    background: ${(props) => props.activeColor};
  }
`;
const PokemonStyled = styled(motion.div)`
  list-style-type: none;
  margin-left: 1rem;
  border: solid 3px ${(props) => props.color};
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 100px;
  font-weight: bold;
`;

export default TypeList;
