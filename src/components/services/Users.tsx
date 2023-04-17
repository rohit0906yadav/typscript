import React from 'react';
import { useState, useEffect } from 'react';
import { IUsers } from '../modals/IUsers';
import { UsersServices } from './usersSevices';
import { Link } from 'react-router-dom';
interface IState {
    loading : boolean,
    users: IUsers,
    errorMsg:string
}
const Users:React.FC =()=>{
    const [state,setState]=useState(
        {
            loading : false,
            users:[] as IUsers[],
            errorMsg:''
        }
    );
    useEffect(()=>{
        setState({...state,loading:true});

        UsersServices.getAllUsers()
        .then((res)=> setState({
            ...state, loading:false, users:res.data
        }))
        .catch((err)=>setState({
            ...state, loading : false, errorMsg : err.message
        }))
    },[])

    const {loading, users, errorMsg}=state
    return(<>
        <div className="container">
            <h3>Data fetching</h3>
            {errorMsg &&  <h3>{errorMsg}</h3>}
            {loading && <h3>Loading.. please wait</h3>}
             <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>user name</td>
                        <td>city</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 && users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td><Link to={`/user/${user.id}`} className='text-decoration-none'>
                            {user.name}
                            </Link></td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
             </table>

        </div>
    </>)
};
export default Users;