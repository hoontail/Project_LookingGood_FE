import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Mason from "./Mason.css";
import { actionCreators as postActions } from "../redux/modules/post";

const Postlist = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const history = useHistory();
  console.log(post_list)


  React.useEffect(() => {

      dispatch(postActions.getPostDB());

  }, []);   
  // 여기서 dispatch를 해주면 데이터 로딩이 느려서 메인으로 옮김... 3시간고생

  return (
    <>
      <div className="container">
        {post_list
          .filter((a) => {
            return a.category == params.category;
          })
          .map((p, idx) => {
            return (
              <figure key={p._id}>
                <img src={p.imageUrl} onClick ={()=>{
                  history.push('/detail/'+p._id)
                }}/>
              </figure>
            );
          })}
      </div>
    </>
  );
};

export default Postlist;

//  {/* {post_list.list
//       .filter((a, idx) => {
//         return console.log(a)
//       })
//       .map((list, index) => {
//         return (
//           <>
//             <figure>
//               <img
//                 src={list.imgUrl}
//                 onClick={() => {
//                   history.push("/detail");
//                 }}
//               />
//             </figure>
//           </>
//         );
//       })} */}
