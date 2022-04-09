import React from "react"
import styled from "styled-components"

function Kategorie(props){


    return(
        <>
        <Choice name="Kategorie">
            <option value="SKY">SKY</option>
            <option value="TEAM">TEAM</option>
            <option value="FOOD">FOOD</option>
            <option value="COMMIT">COMMIT</option>
            <option value="DIARY">DIARY</option>
            <option value="ALGORITHM">ALGORITHM</option>
          </Choice>
        </>
    )
}


export default Kategorie


const Choice = styled.select`
  width: 15vw;
  height: 30px;
  background-color: #fafafa;
  border: none;
  border-bottom: 1px solid black;
  font-size: 20px;
`;