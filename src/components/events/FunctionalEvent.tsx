import React, { useState } from 'react';

interface IState{
    count: number;
}

const FunctionalEvent:React.FC=()=>{
    const [data,setData]=useState<IState>({count : 10});

    const handleIncrement=()=>{
        console.log(data.count)
        setData({count:data.count+1})
    }

    const handleDecrement=()=>{
        console.log(data.count)
        setData({count:data.count+1})
    }

    return(<div className="container">
        <h2>events in functional component</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h2> {data.count} </h2>
                        <button className="btn btn-success ms-3" onClick={()=>handleIncrement()}>change</button>
                        <button className="btn btn-info ms-3" onClick={()=>handleDecrement()}>change</button>
                    </div>
                </div>
            </div>

        </div>
    </div>)
}
export default FunctionalEvent;