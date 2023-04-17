import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
interface IParams{
    id:number
}
const UserDetail:React.FC=()=>{
    const {id} = useParams<IParams | any>()
    return(<>
    <div>
        <h3> user detail page</h3>
        <h4> User id : {id}</h4>
        <div>
            <Link to ={"/user"} className="btn btn-info">Go Back</Link>
        </div>
    </div>
    </>);       
};
export default UserDetail;