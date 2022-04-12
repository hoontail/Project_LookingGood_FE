import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post) => ({ post }));

const initialState = [
  { category: "SKY", imgUrl: "https://assets.codepen.io/12005/windmill.jpg" },
  {
    category: "SKY",
    imgUrl: "https://assets.codepen.io/12005/suspension-bridge.jpg",
  },
  {
    category: "COMMIT",
    imgUrl: "https://assets.codepen.io/12005/suspension-bridge.jpg",
  },
  { category: "COMMIT", imgUrl: "https://assets.codepen.io/12005/sunset.jpg" },
  {
    category: "COMMIT",
    imgUrl: "https://assets.codepen.io/12005/bristol-harbor.jpg",
  },
  { category: "SKY", imgUrl: "https://assets.codepen.io/12005/toronto.jpg" },
  {
    category: "TEAM",
    imgUrl: "https://assets.codepen.io/12005/dog-balloon.jpg",
  },
  {
    category: "TEAM",
    imgUrl: "https://assets.codepen.io/12005/bristol-balloons2.jpg",
  },
  {
    category: "TEAM",
    imgUrl:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/26c2d072-a5b5-45ac-bba2-8d190b72ac06/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220411T080658Z&X-Amz-Expires=86400&X-Amz-Signature=ed1467868c7fdf3354ed61cfac1add3ad557cd7978fdab2b9b133f38f173ef25&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",
  },
  {
    category: "TEAM",
    imgUrl:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0de7043e-63eb-4487-b1dd-74e4caaec9a5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220411T080749Z&X-Amz-Expires=86400&X-Amz-Signature=28659434db7c33e9bfbb808e2b71b3637e5c674690bb94b2d40109556926fe13&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",
  },
];

const addPostDB = (formData) => {
  return async function (dispatch, getState) {
    //     for (var pair of formData.entries()) {
    //       console.log(pair[0]+ ', ' + pair[1]);
    //  }
    try {
      await axios({
        method: "post",
        url: 'http://3.38.253.146/write_modify/user/postadd',
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }

    // axios({
    //   method: "post",
    //   url: 'http://3.38.253.146/write_modify/user/postadd',
    //   data: formData,
    // headers:
    // { "Content-Type": "multipart/form-data",
    // Authorization: localStorage.getItem("access_token") }
    // })
  };
};

const getPostDB = () => {
  return async function (dispatch, getState) {};
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  addPostDB,
  getPost,
};

export { actionCreators };
