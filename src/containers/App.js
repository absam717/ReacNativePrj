import React,{Component} from "react";
import CardList from "../components/CardList";
// import { robots } from './robots';
import SearchFiled from "../components/SearchField";
import './App.css';
import Scroll from '../components/Scroll.js'
import ErrorBoundaries from "../components/ErrorBoundaries";

class App extends Component{
    constructor(){
        super()
        this.state ={
            robot:[],
            searchfield :''

        }
    }
    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robot:users}))
    }
   OnSearchChange=(event)=>{

    this.setState({searchfield:event.target.value})
    // console.log(filtersearch);
          
    }

    
    render(){
        const filtersearch  = this.state.robot.filter(r=>{
            return r.name.toLowerCase().includes(this.state.searchfield)
        })

        return(
        
        
        <div>
        <h1 className="f-headline-ns pa1 tc "> Robot Warriors</h1>
        <SearchFiled searchChage={this.OnSearchChange}/>
        <Scroll>
        <ErrorBoundaries>
        <CardList robot={filtersearch}/>
        </ErrorBoundaries>
        </Scroll>
        </div>
           
        );
    }
    


}

export  default App;