import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

const addPostDB = (post) => {
  
  return async function (dispatch, getState) {
     const _post = {
       category : post.post.category,
       title : post.post.title,
       content : post.post.content,
      imgUrl : post.preview,
      userId : "",
      createdAt:""
     } 
     console.log(_post)
    // axios
    //   .post(
    //     "https://6251cd8b7f7fa1b1dddf39b0.mockapi.io",

    //     {
    //       category: post.post.category,
    //       title: post.post.title,
    //       content: post.post.content,
    //       imgUrl: post.preview,
    //       userId: "",
    //       createdAt: "",
    //     }
    //   )
    //   .then(function (res) {
    //     console.log(res);
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  };
};

export default handleActions(
  {
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
};

export { actionCreators };
