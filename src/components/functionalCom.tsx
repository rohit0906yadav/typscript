import React from 'react';
import { useState } from 'react';
interface IState{
    status:boolean;

}
const ConditionalRendering:React.FC = () =>{

    const handleStatus = () =>{
        setLogin({status:!login.status})
    }
    const [login,setLogin]=useState<IState>({status:true});
    return(<div>
        {
            login.status===true? <h3>condtional reder success</h3> : <h3>render</h3>
        }
        <h3>login status :{login.status===true? "True":"False"}</h3>
        <button onClick={()=>handleStatus()} className="btn btn-info">change login status</button>
    </div>);
}
export default ConditionalRendering;