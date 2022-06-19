import React from "react";

class About_Props extends React.Component{


    

    componentDidMount(){
        console.warn("props",this.props);
    }
render(){
    return(<div>
    <h2> About Props - {this.props.name}</h2>
    </div>)
}

}

export default About_Props;
