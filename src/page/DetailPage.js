import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  _addComment,
  _getComments,
  _editComment,
  _deleteComment,
} from "../redux/modules/comment";
import { now } from "moment";
import { useParams } from "react-router-dom";


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
    setComments([
      ...comments,
      {
        name: "sean",
        comment: comment,
        time: "12:00",
      },
    ]);


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
              onChange={(e) => setComment(e.target.value)}
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