import React from "react";

const Scroll = (props)=>{
return(
<div className="overflow-y-visible ba">
    {props.children}
</div>);

}



export default Scroll;