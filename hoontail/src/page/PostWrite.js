import React from "react";
import styled from "styled-components";

function PostWrite(props) {
  return (
    <>
      <Container>
        <Ddd>
          게시글 작성, 카테고리, 제목, 파일선택 , 이미지 , 내용 , 업로드
        </Ddd>
          <input type="file" />
      </Container>

    
    </>
  );
}

export default PostWrite;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Ddd = styled.div`
  margin-top: 100px;
`;
