import React from "react";
// import CardList from "./CardList";

const SearchFiled =({searchChage})=>{
    

    return(
         <div >
             <input 
             className=" pa2 ba-m bw1 b--purple br3 w-40 h-30"
             type ='text'
            placeholder="search robot"
            onChange={searchChage}
             />
         </div>
    );

}

export default SearchFiled;