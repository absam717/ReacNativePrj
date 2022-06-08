import React from "react";
import Card from "./Card";

const CardList = (props)=>{
const {robot}=props;

const cardArray= robot.map((user,indx)=>{

    return(<Card 
        key ={robot[indx].id}
        id ={robot[indx].id}
        name={robot[indx].name}
        email ={robot[indx].email}
         />);
});
return(
    <div>
    {cardArray}
    </div>

);
}



export default CardList;
