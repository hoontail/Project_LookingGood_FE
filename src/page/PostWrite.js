import React from "react";
import styled from "styled-components";
import Category from "../components/Category";
import Image from "../elements/Image";
import Input from "../elements/Input";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
function PostWrite(props) {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);

  const fileInput = React.useRef(null);

  const [post, setPost] = React.useState({
    title: "",
    category: "SKY",
    content: "",
  });
  console.log(post)

  const selectFile = (e) => {
    // console.log(e.target.files);

    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };


  // computed property names 문법 (키값 동적 할당)
  const handleForm = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  
  const formData = new FormData()
 if(fileInput.current){   
    formData.append('image', fileInput.current.files[0] )
    formData.append('title', post.title)
    formData.append('category', post.category)
    formData.append('content', post.content)
}
    

  //  폼데이터 콘솔 찍기
//   for (var pair of formData.entries()) {
//     console.log(pair[0]+ ', ' + pair[1]);
// }
  const addPostDB = () => {
    if (post.title === "" || post.content === "") {
      window.alert("내용을 추가 해 주세요");
      return;
    }
    dispatch(postActions.addPostDB(formData));
  };

  return (
    <>
      <Container>
        <h2>게시글 작성</h2>
        <AddBox>
          <Category _onChange={handleForm} />
          <Input
            name="title"
            placeholder="제목을 입력 해주세요"
            value={post.title}
            _onChange={handleForm}
          ></Input>
          <Image
            shape="rectangle"
            src={
              preview
                ? preview
                : "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/34536761_1671128712923275_5353672757324283904_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGnHbn1pRVxTStrGMKvjUo_KLOy8OQ0Q58os7Lw5DRDnyMbdGM3Mzlku5kyCRmpIxk&_nc_ohc=tlTf0il44FsAX_Mvx30&tn=lo8VY0LKkuWEc3Kp&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_SQ87lZSPSRL3axVUO9KnlnWQGRq4ardYEEXB3xC4ZWg&oe=62764050"
            }
          />
          <AddImage type="file" ref={fileInput} onChange={selectFile} />
          <Input
            multiLine
            name="content"
            value={post.content}
            placeholder="내용을 입력 해주세요"
            _onChange={handleForm}
          />
        </AddBox>
        <AddBtn onClick={addPostDB}>작성하기</AddBtn>
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
  margin-bottom: 45px;
  cursor: pointer;
  &:hover {
    border: 3px solid #394481;
    /* #FF385C; */
  }
`;
