import React from 'react';

interface IPROPS {
    userId : string;
    userName : string;
};

class ClassComponent extends React.Component<IPROPS>{
    constructor(props:IPROPS){
        super(props);
    }
    render(){
        const {userId,userName}=this.props;
        return(<div>
            <h2>class Component with typescript</h2>
             <h3>user id : {userId}</h3>
            <h3>user Name : {userName}</h3> 
        </div>)
    }

}
export default ClassComponent;