import React from 'react';
import { IUser } from '../modals/IUser';
import { useState } from 'react';
import { UserService } from './UserService';
interface IState {
    users:IUser[]
};

const Looping:React.FC = ()=>{
    const [state, setState] = useState<IState>({
        users: UserService.getAllUsers()
    })
    return(<>
    <div className="container">
        <div className="row" w-50 mt-4>
            <h1>Looping/ Iteration</h1>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nmae</th>
      <th scope="col">age</th>
    </tr>
  </thead>
  <tbody>
    {state.users.length>0 && state.users.map(users=>(
        <tr key={users.sno}>
            <td>{users.sno}</td>
            <td>{users.name}</td>
            <td>{users.age}</td>
        </tr>

    ))}
    
  </tbody>
</table>
        </div>
    </div>
    </>)
};
export default Looping;