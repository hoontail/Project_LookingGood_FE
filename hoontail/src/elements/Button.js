import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width, padding } = props;
  if (is_float) {
    return (
      <>
        <FloatButton onClick={_onClick}>{text}</FloatButton>
      </>
    );
  }
  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };
  return (
    <>
       <ElButton {...styles} onClick={(e)=>{
         e.stopPropagation();
         _onClick();
       }}>{text? text: children}</ElButton>
    </>
  );
};

Button.defaultProps = {
  text: "텍스트",
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '100%',
  padding: "12px 0px",
};

const ElButton = styled.button`
  width: 100%;
  background-color: #212121;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin? `margin: ${props.margin};`: '')}
  ${(props) => (props.width? `width: ${props.width};`: '')}
  padding: ${(props) => props.padding};
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  margin-left: 630px;
  bottom: 50px;
  /* right: 16px;  */
  text-align: center;
  /* display: flex; */
  /* justify-content: center; */
  border: none;
  border-radius: 50px;
  vertical-align: middle;
`;

export default Button;
