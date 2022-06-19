import React from "react";

class About extends React.Component{

    constructor(){
        super();
        // this.state = {
        //     age:28,
        //     name:"satyendra"
        // }
    }


componentDidMount(){
    console.warn("propsabout",this.props.name);

    //console.warn("props",this.props);
}

componentDidUpdate(){
    console.warn("propsabout",this.props.name);
}
    render(){

       // const [vel,setVel] = useState("rahul")
        const test = (e)=>{
            console.warn("aero function",e.target.value);
        }
        return(<div>
            <h2>About - {this.props.name}</h2>
            <input type="text" onChange={test} />
        <button onClick={test} >click me </button>
        {/* <h2> About Page Component</h2>
        {this.state.age}
        {this.state.name}
        <button onClick={()=>{this.setState({name:"aman"})}} >click me </button> */}

        </div>)
    }
}

export default About;