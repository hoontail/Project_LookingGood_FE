import React from "react";
import styled from "styled-components";

import  Grid  from "./Grid";

const Input = (props) => {
  const {  placeholder,  type, multiLine, value, _onChange, name} = props;

  if (multiLine) {
    return (
      <Grid>
        <ElTextarea
          name={name}
          rows={10}
          value = {value}
          placeholder={placeholder}  
          onChange={_onChange}    
        ></ElTextarea>
      </Grid>
    );
  }
  return (
    <>
      <Grid>
        <ElInput  name={name} placeholder={placeholder} value = {value} onChange={_onChange} type={type} />
      </Grid>
    </>
  );
};

Input.defaultProps = {
  label: "텍스트",
  placeholder: "텍스트를 입력해주세요.",
  _onChange: () => {},
  value: "",
  type: "text",
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  margin-bottom: 16px;
`;


const ElInput = styled.input`
  margin: 16px 0px;
  width: 35vw;
  height: 5vh;
  border: none;
  border-bottom: 1px solid black;
  background-color: #fafafa;
  font-size: 20px;
`;


export default Input;
