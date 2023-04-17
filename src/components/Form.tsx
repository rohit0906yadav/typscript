import React, { useState } from 'react';
import { Login } from './Login';
interface IState{
    user : Login
}
const Form:React.FC = () =>{
     const [state,setState]=useState<IState>(
        {user : {username:'',password:''}}
        );
    
        const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void =>{
            setState({
                user : {
                    ...state.user,
                    [event.target.name]:event.target.value,
                }
            });
            }
            const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
                event.preventDefault();
                console.log(state.user)
            }
    return(<div>
        <div className="container">
            <form className="card p-4 mt-4" onSubmit = {handleSubmit}>
                <h1>Login form </h1>
                <div className="mb-3">
                    <label htmlFor = "exampleInputEmail" className="form-label">Email address</label>
                    <input type="email"
                     placeholder="Enter first Name"
                     value ={state.user.username} 
                     aria-describedby="emailHelp" 
                     className="form-control"
                     onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor = "exampleInputPassword" className="form-label">Password</label>
                    <input type="password" 
                    placeholder = "exampleInputPassword"
                     value ={state.user.password}
                     className="form-control"
                     onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">submit</button>
            </form>
            <div className="mt-4 bg-light">
                <p>input data</p>
            </div>
        </div>
    </div>)
}
export default Form;