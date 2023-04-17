import React, { useState } from 'react';
interface IPROPS {
    name: string;
    age: number;

}
interface IState {
    title: string;
    skill: string;
}
const State: React.FC<IPROPS> = ({ name, age }) => {

    let [state, setState] = useState<IState>({ skill: 'ReactDeveloper', title: 'frontend' });
    return (
        <div className="card" style={{ border: "2px,red   " }}>
            <h1>state in functional component</h1>
            <h2>props value</h2>
            name : {name};
            age : {age};
            <div className="bg-success"><h2>state vlaues</h2> <br />
                title : {state.title} <br />
                skill  : {state.skill}
            </div>
        </div>
    )
}
export default State;