import  React, { Component } from 'react';

class ErrorBoundaries extends Component {
    constructor(props){
        super(props);
        this.state ={haserror:false}
    }


static getDerivedStateFromError(error){
   return {haserror:true};

}
componentDidCatch(error,info){
    console.log("oops there is an error -->"+error);
}

    render() {
        
            if(this.state.haserror){
            return(
            <div>
                <h1>Opps something's wrong !</h1>
            </div>
            );
            }
            return this.props.children;
        ;
    }
}

export default ErrorBoundaries;
