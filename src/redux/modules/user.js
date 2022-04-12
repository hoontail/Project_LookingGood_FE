import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, deleteCookie } from "./Cookie";
import axios from "axios"

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware
const signupDB = (id, pwd, pwdCheck, url, ) => {
  return function (dispatch, getState, { history }) {
// axios 연결하기
    axios({
      method: 'post',
      url: 'http://3.35.174.45/api/signup',
      data: {
        userId: id,
        password: pwd,
        userImageUrl: url,
        confirmPassword: pwdCheck,
      }
    })
    .then(function(response) {
      console.log(response)
      dispatch(
        setUser({
          userId: response.data.id,
          password: pwd,
          userImageUrl: url,
        })
      );
    })
    history.push("/");
  };
};

const loginDB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
  //axios 연결하기
    axios({
      method: 'post',
      url: 'http://3.35.174.45/api/login',
      data: {
        userId: id,
        password : pwd,
      }
    })
    .then(function(response) {
      console.log(response)
      localStorage.setItem("token", response.data.token);
      dispatch(
        setUser({
          userId: id,
          password: pwd,
        })
      );
    })

    console.log('로그인했어요!')
    history.push("/");
  };
};

const loginCheckDB = (user) => {
  return function (dispatch, getState, {history}){
      if(user){
        dispatch(
          setUser({
            userId: user.id,
            userImageUrl: user.url,
          })
        );
      }else{
        dispatch(logOut());
      }
  }
}

const logoutDB = () => {
  return function (dispatch, getState, {history}) {
      dispatch(logOut());
      history.replace('/');
    }
}

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  setUser,
  logOut,
  getUser,
  signupDB,
  loginDB,
  loginCheckDB,
  logoutDB,
};

export { actionCreators };
