import React from 'react';
import ReactDom from 'react-dom';
import { nullLiteral } from '@babel/types';
import SeasonDisplay from './SeasonDisplay.js';

// import Comment from './CommentDetail'
// import ApprovalCard from './ApprovalCard'

// const App=()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>console.log(position),
//         (err)=>console.log(err)
//     );
//     return(
//         // <div className="ui container comments">
//         //     <ApprovalCard>
//         //    <Comment author='Sam'/> 
//         //    </ApprovalCard>  
//         //    <ApprovalCard>
//         //    <Comment author='Jan'/>
//         //    <ApprovalCard>
//         //    </ApprovalCard>
//         //    <Comment author='Fish'/>
//         //    </ApprovalCard>  
//         // </div>
        
//         <div>Lattitude:</div>
//         );
// }


class App extends React.Component{
   
    state = {lat:nullLiteral,errorMessage:''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat:position.coords.latitude}),
            (err)=>this.setState({errorMessage:err.message})
        );
    }
    render(){
        
       if(this.state.errorMessage && !this.state.late){
           return <div>Error:{this.state.errorMessage}</div>
       }
       if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat} />
        return
       }
       return <div>loading!</div>
    }
    
}

ReactDom.render(
<App />,
document.querySelector('#root')
    
);