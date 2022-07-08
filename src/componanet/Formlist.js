import axios from "axios";
import React from "react";

const deleteUser = (id) => {


    axios.delete(`http://localhost/learn-react/view.php/${id}`).then(function(response){
    console.log(response.data);
   // this.getapi();
})  .catch((e) => {
    console.log(e);

});
}


class Formlist extends React.Component{
    constructor(props){
        super(props)
        this.state = {list:[]}

        this.getapi = this.getapi.bind(this);

    }
    

    componentDidMount() {
        this.getapi();
      }
      
    getapi() {
        var self = this;
        axios.get('http://localhost/learn-react/view.php/').then(function(response) {
           // console.log(response);
           self.setState({list:response.data});
        });
    }



    render(){
        return(<div>
                <h2>All Contact List</h2>
                <table id="table">
        <tr>
        <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
            {this.state.list.map((item) =>

                    <tr key={item.id} > 
                    <td>{item.id}</td>
                    <td> {item.name}</td>
                    <td>  {item.email}</td>
                    <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
                     </tr>
            )}
               </table>
        </div>)
    }

}

export default Formlist;