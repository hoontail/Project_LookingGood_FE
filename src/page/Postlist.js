import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Mason from "./Mason.css";
import { actionCreators as postActions } from "../redux/modules/post";


const Postlist = (props) => {
  const params = useParams();
<<<<<<< HEAD
  const dispatch = useDispatch();
  const post_list = useSelector(state => state.post)
 
 
  return (

    <>
    
    <div className="container">
      {post_list.filter((a)=> {
        return a.category == params.category
      }).map((list, index) => {
        return (      
=======
  const dispatch = useDispatch()
  const post_list = useSelector(state => state.post.list)
  const history = useHistory()

 
  React.useEffect(()=>{
    dispatch(postActions.getPostDB())
  },[])  
  return (<>
  
  
  <div className="container">
  {post_list.filter((a)=> {
    return a.category == params.category
  }).map((list, index) => {
    return(<>
    <figure>
    <img src={list.imgUrl} onClick={()=>{
      history.push('/detail')
    }}/>
    </figure>
    
    </>)
  }) 
  }
  </div>
  
  </>)
  }

   
    
//     <div className="container">
//       {post_list.filter((a)=> {
//         // return a.category== params.category
//       }).
//       {post_list.map((list, index) => {
//         return (      
>>>>>>> 866a999053525d4a1ea9d4358aff01e7a6508725
         
//           <>{list.title}</>
//         //  <figure>
//         // <img src={list.imgUrl} onClick={()=>{
//         //   history.push('/detail/'+params.category+index)
//         // }} /> 
//         //   </figure>
        
          
//         );
//       })}
//     </div>
//  </>
//   );
// };

export default Postlist;
