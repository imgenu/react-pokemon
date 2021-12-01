import { motion } from "framer-motion";
import styled from "styled-components";
import LoadingIcon from "../icons/spinner-solid.svg";
import pikachu from "../icons/pikachu.png";
export const Loading = () => {
  return (
    <LoadingStyled>
      <motion.img
        animate={animation}
        transition={transition}
        src={LoadingIcon}
        alt="loading"
      />
      <p>Loading...</p>
    </LoadingStyled>
  );
};

export const Nodata = () => {
  return (
    <NodataStyled>
      <img src={pikachu} alt="no data" />
      <p>No Pokemon Found!</p>
    </NodataStyled>
  );
};

const LoadingStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  align-items: center;
  width: 100%;
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
const NodataStyled = styled(LoadingStyled)`
  img {
    width: 15rem;
    height: 15rem;
    margin-bottom: 1rem;
  }
`;
