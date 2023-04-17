import React from 'react';

interface IPROPS {
    name:string;
    experience : number;
}
interface IState{
    title : string;
    programming : string;
}
class ClassState extends React.Component<IPROPS, IState>{
    constructor(props: IPROPS) {
        super(props);
        this.state = {
          title  : "developer",
           programming : "react"
        }
    };
    render() {
        const {title,programming}=this.state;
        const {name, experience} = this.props
        return (<div>
            <h2>states in class component</h2>
        </div>)
    }
};
export default ClassState;