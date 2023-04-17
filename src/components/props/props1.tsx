import React from 'react';
interface IPROPS{
    colorValue:string,
    name:string,
    position?:string;
};

const Props1:React.FC<IPROPS>=({colorValue,name})=>{
    return(<div>
        <h3 style={{color:colorValue}}>Props in typescript{colorValue} {name}</h3>

    </div>);
};  
export default Props1;