import React, { useState } from 'react';
interface IState{
    msg:string;
}
const FunctionPassingProps:React.FC = () =>{
    const [title,setTitle] = useState<IState>({msg:"greeting"});

    const handleTitle =(data:string):void=>{
        setTitle({msg:data});
    }
    return(<div>
        <div className="col-md-6">
            <div className="card mt-4">
                <div className="card-body">
                    <h1 className="m-3"><h2>{title.msg}</h2></h1>
                    
            <button className="btn btn-danger" onClick={()=>handleTitle("Like")}>Like</button>
            <button className="btn btn-info" onClick={()=>handleTitle("comment")}>Like</button>
            <button className="btn btn-dark" onClick={()=>handleTitle("subscribe")}>Like</button>
                </div>
            </div>
        </div>
        
    </div>)
}
export default FunctionPassingProps;