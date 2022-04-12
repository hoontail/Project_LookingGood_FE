import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';


// action
const ADD = 'comment/ADD';
const LOAD = 'comment/LOAD';
const DELETE = 'comment/DELETE';
const EDIT = 'comment/EDIT';

// action creator
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

export const addCommentDB = (postId, token, comment) => {

		return function (dispatch, getState) {
		axios({
      method: 'post',
      url: `http://3.35.174.45/api/comments/${postId}`, 
      data: {
					postId: postId,
					comment: comment
      },
					headers: {
						Authorization : `Bearer${token}`
					}
    })
    .then(function(response) {
      console.log(response)
    //   dispatch(
    //     setUser({
    //       userId: response.data.id,
    //       password: pwd,
    //       userImageUrl: url,
    //     })
    //   );
	})
}

}



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
					(comment) => comment.id !== action.payload.coId,
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
	initialState,
);

const actionCreators = {
  addCommentDB,


};

export { actionCreators };