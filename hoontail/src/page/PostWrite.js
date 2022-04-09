import React from "react";
import styled from "styled-components";
import Kategorie from "../components/Kategorie";
import Image from "../components/Image";
import Input from "../elements/Input";
function PostWrite(props) {
  return (
    <>
      <Container>
        <AddBox>
          <p>게시글 작성</p>
          <Kategorie />
          <Input placeholder="제목을 입력 해주세요"></Input>
          <Image
            shape="rectangle"
            src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/34536761_1671128712923275_5353672757324283904_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGnHbn1pRVxTStrGMKvjUo_KLOy8OQ0Q58os7Lw5DRDnyMbdGM3Mzlku5kyCRmpIxk&_nc_ohc=tlTf0il44FsAX_Mvx30&tn=lo8VY0LKkuWEc3Kp&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_SQ87lZSPSRL3axVUO9KnlnWQGRq4ardYEEXB3xC4ZWg&oe=62764050"
          />
          <AddImage type="file" />
        <Input multiLine placeholder="내용을 입력 해주세요"/>
        </AddBox>
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
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: #fafafa;
`;

const AddBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddImage = styled.input`
  cursor: pointer;
  margin: 16px 0px;
  display: flex;
`;
