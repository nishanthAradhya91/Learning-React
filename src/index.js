import React from 'react';
import ReactDom from 'react-dom';
import Comment from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App=()=>{
   
    return(
        <div className="ui container comments">
            <ApprovalCard>
           <Comment author='Sam'/> 
           </ApprovalCard>  
           <ApprovalCard>
           <Comment author='Jan'/>
           <ApprovalCard>
           </ApprovalCard>
           <Comment author='Fish'/>
           </ApprovalCard>  
        </div>
        );
}

ReactDom.render(
<App />,
document.querySelector('#root')
    
);