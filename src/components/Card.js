import React from "react";

const Card = (props) =>{
    const {name,id, email}=props;
    return(
        <div className="bg-white mw6 dib grow pa3 br4 ma3 bw2 shadow">
            <img src={`https://robohash.org/${id}`}  width="50%" height="50%" alt="img"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>


        </div>

    );
}
export default Card;