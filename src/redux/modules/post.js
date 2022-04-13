import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post) => ({ post }));

const initialState = {
 list :[
  
 ]
}



const addPostDB = (formData) => {
  const token = sessionStorage.getItem("token");
  return async function (dispatch, getState) {
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    try {
      await axios({
        method: "post",
        url: "http://15.164.163.116/api/post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
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
  return async function (dispatch, getState) {

   
    await axios
      .get("http://15.164.163.116/api/post")
      .then((response) => {
        dispatch(setPost(response.data.list))
  
   
      })
      .catch((error) => {
        console.log(error);
      });
      
  };
};


const getOnePostDB = () =>{
  return async function (dispatch, getState){
    
  
}}






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
  getPostDB,
};

export { actionCreators };
