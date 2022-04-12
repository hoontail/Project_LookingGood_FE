import React from "react";
import styled from "styled-components";

function Image(props) {
  const { shape, src, size } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (shape === "rectangle") {
    return <AspectOutter>
        <AspectInner {...styles}></AspectInner>
           </AspectOutter>;
  }
  return <>
  <ImageDefault {...styles}></ImageDefault></>;
}

Image.defaultProps = {
  shape: "circle",
  src: "https://cdn2.vectorstock.com/i/1000x1000/85/11/looking-good-emoji-line-icon-sign-vector-20798511.jpg",
  size: 36,
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;
const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 8px 16px;
`;

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;


export default Image;
