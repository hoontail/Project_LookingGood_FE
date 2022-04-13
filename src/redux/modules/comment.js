import { createAction, handleActions } from "redux-actions";
import axios from "axios";

// action
const ADD = "comment/ADD";
const LOAD = "comment/LOAD";
const DELETE = "comment/DELETE";

const GET_COMMENTS = "GET_COMMENTS"

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
  comment: null,
  comments: [],
};

//middleware
export const editCommentDB =
  (id, coId, newContent, setEditMode) => async (dispatch) => {
    await axios.edit(id, coId, newContent);
    // dispatch(editComment(coId, data));
    setEditMode(false);
  };

// (*) async getComments() 
// make axios.get call here (?)

export const getCommentsDB = (commentIds) =>
  async (dispatch, getState,) => {


    try {

      // call (*) getComments to make async call to fetch comments.
      // const comments = commentIds.map((commentId) => axios.get(`http://15.164.163.116/api/comments/${commentId}`));
      // Pass comments to Reducer.
    } catch (e) {

    }
  };




export const addCommentDB = (postId, token, comment) => {
  return function (dispatch, getState) {
    axios
      .post({
        url: 'https://62565de452d8738c692e515a.mockapi.io/comments',
        data: {
          postId: postId,
          comment: comment,
        },
        headers: {
          Authorization: `Bearer${token}`,
        },
      })
      .then(function (response) {
        console.log(response);
      });
  };
};

export const deleteCommentDB = (id, coId) => (dispatch) => {
	try {
		axios.delete(id, coId);
		dispatch(delComment(coId));
	} catch (e) {}
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

    // GET_COMMENTS reducer will look like this.
    // [GET_COMMENTS]: (state, action) => {
    //   return {
    //     ...state,
    //     comments: action.payload.comment,
    //   };
    // },

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
	editCommentDB,
	deleteCommentDB
};

export { actionCreators };
