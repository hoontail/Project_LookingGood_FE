import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Mason from "./Mason.css";
const Postlist = () => {
  const params = useParams();
  const dispatch = useDispatch
  const post_list = useSelector(state => state.post)
 
  console.log(params)
  return (
    <div className="container">
      {post_list.filter((a)=> {
        return a.category==="TEAM"
      }).map((list, index) => {
        return (
          <figure>
            <img src={list.imgUrl} />
          </figure>
        );
      })}
    </div>
 
  );
};

export default Postlist;
