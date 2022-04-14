import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCookie } from "../redux/modules/Cookie";
import { now } from "moment";
import { actionCreators as commentsActions } from "../redux/modules/comment";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";


const DetailPage = (props) => {

  const token = sessionStorage.getItem("token");
  
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.User);
  const comments_list = useSelector((state) => state.comment.comments);


  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  React.useEffect(() => {

      dispatch(postActions.getOnePostDB(params.postid));
      dispatch(commentsActions.getCommentsDB(params.postid));
    
  }, []);

  const postComment = () => {
    if(comment ===""){	
      window.alert("내용을 입력 해주세요")	
      return	
    }	
    dispatch(commentsActions.addCommentDB(token, comment, params.postid));

    setComment("");

    // Dispatch Post Comment Action.
    // dispatch(POST_COMMENT)
  };
  const onChange = (e) => {
    setComment(e.target.value);
  };

  const deletePost = () => {
    dispatch(postActions.deletePostDB(params.postid));
  };
  if(!post.userId){
    return;
  }
  return (
    <Main>
      <BigBox>
        <ImageRect src={post.imageUrl} />
        <Box>
          <NameTag>
            <N>
            <ImageCircle src={post.userImageUrl} />
            <h5>{post.userId}</h5>
            </N>

            <BtnGroup>
            {post.userId === user_info.user.userId ? (	
                <>	
                  <EDBtn onClick={()=>{	
                    history.push("/edit/"+post._id)	
                  }}>수정</EDBtn>	
                  <EDBtn onClick={deletePost}>삭제</EDBtn>	
                </>	
              ) : (	
                null	
              )}
            </BtnGroup>
          </NameTag>
          <PosterBox>
            <Text>
              <div style={{ fontSize : "20px"}}>{post.title}</div>

              <br />
              {post.content}
            </Text>
          </PosterBox>

          {/* Option 1 */}
          <Box1>
            {comments_list.map((comment) => (
              <SmallBox>
                <ImageCircle src={comment.userImageUrl} />
                <Text>{comment.userId}</Text>
                <Text> {comment.comment}</Text>
                <Text1> {comment.createAt}</Text1>
              </SmallBox>
            ))}
          </Box1>

          <SmallBox>
            <Input
              placeholder="Leave a comment here"
              value={comment}
              onChange={onChange}
            />

            <Button
              onClick={() => {
                postComment();
                // history.push(`/Post_list`);
              }}
            >
              Submit
            </Button>
          </SmallBox>
        </Box>
      </BigBox>
    </Main>
  );
};

const NameTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PosterBox = styled.div`
  display: flex;
  float: left;
  height: 150px;
  /* 
  border: 3px solid black; */
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafafa;
  padding-top: 50px;
  /* padding-top: 100px; */
  height: 100%;
  /* min-height: 100vh; */
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #394481;
  color: #394481;
  margin: 0 1em;
  padding: 0.6em 0.8em;
  border-radius: 50px;
  font-size: medium;
  cursor: pointer;
  &:hover {
    border: 3px solid #394481;
  }
`;

const SmallBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  float: left;
  /* border: 2px solid red; */
`;

const BigBox = styled.div`
  margin: auto;
  display: flex;
  align-items: center;

  /* border: 3px solid blue; */
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  border: 1px solid gray;
  padding: 0 1em;
  margin: 1em;
  width: 400px;
  height: 600px;
  border-radius: 30px;

  /* justify-content: space-between; */
  /* border: 3px solid yellow; */
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 3px solid green; */
  height: 300px;
  overflow: auto;
  width: 350px;
  height: 300px;
`;

const ImageRect = styled.div`
  border-radius: 30px;
  display: flex;
  width: 500px;
  height: 600px;
  /* position: relative; */
  /* padding-top: 75%; */
  /* overflow: hidden; */
  background-image: url(${(props) => props.src});
  background-size: cover;
`;

const ImageCircle = styled.div`
  min-width: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 3px 10px 3px 3px;
`;
const Input = styled.input`
  border: 1px solid #394481;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  border-radius: 10px;
`;
const Text = styled.div`
  color: "#222831";
  font-size: 15px;
  padding: 0 4px;
`;
const Text1 = styled.div`
  color: "#222831";
  font-size: 11px;
  justify-content: right;
`;

const EDBtn = styled.button`
  padding: 5px;
  margin-left: 10px;
`;
const BtnGroup = styled.div`
  padding: 16px;
  margin-left: 90px;
  flex-direction: column;
`;

const N = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export default DetailPage;
