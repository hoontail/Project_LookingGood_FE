import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Mason from "./Mason.css";
import {actionCreators as postActions} from "../redux/modules/post"
import { useHistory } from "react-router-dom";

const Postlist = ({ _handleModal }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const history = useHistory();

  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);
  return (
    <>
      <div className="container">
        {post_list
          .filter((a) => {
            return a.category == params.category;
          })
          .map((list, index) => {
            return (
              <>
                <figure>
                  <img
                    alt="category"
                    src={list.imgUrl}
                    onClick={() => {
                      history.push("/detail");
                    }}
                  />
                </figure>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Postlist;
