import React from "react";
import styled from "styled-components";

function Grid(props) {
  const { is_flex, width, margin, padding, bg, children, center, _onClick, maxWidth } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    maxWidth:maxWidth,
  };
   
  return (
    <>
      <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
    </>
  );
}

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: () =>{}
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  
  height: 100%;
  box-sizing: border-box; //패딩같은 것을 넓이에 포함하는
  ${(props) => (props.padding ? `padding :${props.padding};` : "")}
  ${(props) => (props.margin ? `margin : ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between`
      : ""}
  ${(props) => props.center? `text-align:center`: ''}
`;

export default Grid;
