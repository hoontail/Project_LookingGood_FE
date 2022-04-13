import { createAction, handleActions } from "redux-actions";
import axios from "axios";

// action
const ADD = "comment/ADD";
const LOAD = "comment/LOAD";
const DELETE = "comment/DELETE";
const GET_COMMENTS = "GET_COMMENTS";
const EDIT = "comment/EDIT";

// action creator

// compponents
// actions
// reducers
// middleware

const addComment = createAction(ADD, (comment) => ({ comment }));
const getComments = createAction(LOAD, (comment) => ({ comment }));
const delComment = createAction(DELETE, (coId) => ({ coId }));
const editComment = createAction(EDIT, (coId, newContent) => ({
  coId,
  newContent,
}));

// initialState
const initialState = {
  comments: [],
};

//middleware
// (*) async getComments()
// make axios.get call here (?)

export const getCommentsDB = (postId) => async (dispatch, getState) => {
  
    axios.get(`http://15.164.163.116/api/comments/get/${postId}`)
  .then(response => {
    console.log(response);
    dispatch(getComments(response.data));
  }) 
  .catch(error => {
    console.log(error);
  })
};

export const addCommentDB = (token, comment, postId) => {

  return function (dispatch, getState) {
    console.log(comment);
    axios
      .post(
        `http://15.164.163.116/api/comments/save/${postId}`,
        {
          userId: token,
          postId: postId,
          comment: comment,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      )
      .then(function (response) {
        dispatch(addComment(response.data.list));
      
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteCommentDB = (postId) => (dispatch) => {
  try {
    axios.delete(postId);
  } catch (error) {
    console.log(error);
  }
  dispatch(delComment(postId));
};

// reducer
export default handleActions(
  {
    [ADD]: (state, action) => {
      console.log(action);
      return {
        ...state,
        comments: state.comments.concat(action.payload.comment),
      };
    },

    [LOAD]: (state, action) => {
      return {
        ...state,
        comments: action.payload.comment,
      };
    },

    [DELETE]: (state, action) => {
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload.coId
        ),
      };
    },

    [EDIT]: (state, action) => {
      // 배열에서 특정값을 찾아서 불변성 유지하면서 수정해주기
      const data = action.payload.newContent;
      return {
        ...state,
        comments: state.comments.map((comment, idx) => {
          if (comment.id === data.id) {
            return (state.comments[idx] = data);
          } else {
            return comment;
          }
        }),
      };
    },
  },
  initialState
);

const actionCreators = {
  addCommentDB,
  getCommentsDB,
  deleteCommentDB,
};

export { actionCreators };
