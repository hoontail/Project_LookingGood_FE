import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCookie } from "../redux/modules/Cookie";
import {
  addCommentDB,
  getCommentsDB,
  editCommentDB,
  deleteCommentDB,
} from "../redux/modules/comment";
import { now } from "moment";
import { useParams } from "react-router-dom";

/**
 *  
 * 
 * GET POST.
 {
    title: "제목입니다",
    content: "반가워요",
    userImageUrl: "images/cancle.png",
    imageUrl: "images/cancle.png",
    commentIds:[
        123,
        234,
        345
    ]
 }
 * 
 * 
 * GET COMMENT.
 *
 * 
  {
     commentId: 123
     comment: "좋은 것 같습니다.",
     userId: "kimjeontae",
     userImageUrl: "images/cancle.png",
   }
 * 


Redux order.

(useEffect)
1. On render (mount) Get Post.
2. From Post, using commentIds, getComments
   - dispatch(GET_POST), dispatch(GET_COMMENTS) 

(redux)
Action, Middleware, Reducer.

Create action example: "GET_POST" and "GET_COMMENTS"



 */

const DetailPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");

  const params = useParams();
  console.log(params.postid);
  const comment_list = useSelector((state) => state.comment.comment);
  // console.log(comment_list, postId);
  const [comment, setComment] = useState();

  React.useEffect(() => {
    

    // Dispatch Get Actions
    // Get Post,
    // Get Comments (using post.commentIds)
    // exmple: const comments = commentIds.map((commentId) => axios.get(`http://15.164.163.116/api/comments/${commentId}`));
  }, []);

  // comment가 없거나, post_id가 없으면 아무것도 안넘겨준다!
  // if(!comment_list[postId] || !postId){
  //   return null;
  // }

  console.log(token, comment_list);

  const onChange = (e) => {
    setComment(e.target.value);
  };

const DetailPage = (props) => {
  const history = useHistory();
  const params = useParams()
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.User)
  
console.log(user_info)
  
 const post = post_list.find(p => p._id === params.postid)
 console.log(post)
  
 
 const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const postComment = () => {
    dispatch(addCommentDB(token, comment));
    setComment("");

    // Dispatch Post Comment Action.
    // dispatch(POST_COMMENT)

  };

  return (
    <Main>
      <BigBox>
        <ImageRect src={post.imageUrl} />
        <Box>
          <NameTag>
            <ImageCircle src={user_info.userImageUrl}/>
            <Text>{user_info.userId}</Text>
          </NameTag>
          <PosterBox>
            <Text>
            <h3>{post.title}</h3> 
             <p/>{post.content}
            </Text>
          </PosterBox>

          {/* Option 1 */}
          <Box1>
            {comments.map((comment) => (
              <SmallBox>
                <ImageCircle src={user_info.userImageUrl}/>
                <Text>{comment.name}</Text>
                <Text> {comment.comment}</Text>
                <Text1> {new Date().toUTCString()}</Text1>
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
  &:hover{
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
  border: 1px solid #394481;
  padding: 0 1em;
  margin: 1em;
  width: 400px;
  height: 600px;
  border-radius: 30px;

  /* justify-content: space-between; */
  /* border: 3px solid yellow; */
`;

const Box1 = styled.div`
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
  background-image: url(${props =>(props.src)});
  background-size: cover;
`;

const ImageCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-image: url(${props =>(props.src)});
  background-size: cover;
  margin: 3px;
`;
const Input = styled.input`
  border: 1px solid #394481;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  border-radius: 10px;
`;
const Text = styled.p`
  color: "#222831";
  font-size: 15px;
  padding: 0 4px;
`;
const Text1 = styled.p`
  color: "#222831";
  font-size: 11px;
  justify-content: right;
`;

export default DetailPage;
