import React from "react";
import styled from "styled-components";
import Category from "../components/Category";
import Image from "../elements/Image";
import Input from "../elements/Input";
function PostWrite(props) {
  const [post , setPost] = React.useState({
    title: "",
    category : "SKY",
    content : ""
  })
  const handleForm = (e) => {
    setPost({
        ...post,
        [e.target.name]: e.target.value,
    })
} 
 

  return (
    <>
      <Container>
        <h2>게시글 수정</h2>
        <AddBox>
          <Category _onChange={handleForm} />
          <Input
            placeholder="제목을 입력 해주세요"
            value={post.title}
            _onChange={handleForm}
            name = 'title'
          ></Input>
          <Image
            shape="rectangle"
            src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/34536761_1671128712923275_5353672757324283904_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGnHbn1pRVxTStrGMKvjUo_KLOy8OQ0Q58os7Lw5DRDnyMbdGM3Mzlku5kyCRmpIxk&_nc_ohc=tlTf0il44FsAX_Mvx30&tn=lo8VY0LKkuWEc3Kp&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_SQ87lZSPSRL3axVUO9KnlnWQGRq4ardYEEXB3xC4ZWg&oe=62764050"
          />
          <AddImage type="file" />
          <Input
            multiLine
            value={post.content}
            placeholder="내용을 입력 해주세요"
            _onChange={handleForm}
            name = 'content'
          />
        </AddBox>
        <AddBtn>작성하기</AddBtn>
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
  padding-top: 100px;
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

const AddBtn = styled.button`
  float: right;
  width: 90px;
  height: 35px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #fafafa;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    border: 3px solid #394481;
    /* #FF385C; */
  }
`;
