import React from "react";

class ContactForm extends React.Component{

 
    constructor(props){
        super(props)
        this.state = {item:[],name:'',email:''}
            this.inputChnage = this.inputChnage.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }


    inputChnage(e){
        if(e.target.id == "name"){
            this.setState({name:e.target.value})

        } else if(e.target.id=="email"){
            this.setState({ email:e.target.value})

        }

    }


    formSubmit(e){
        e.preventDefault();
        if (this.state.name.length === 0 || this.state.email.length === 0  ) {
            return;
          }

          const newdata = {
            name:this.state.name,
              email:this.state.email
          }

          this.setState(state => ({
              item:state.item.concat(newdata),
              name:'',
              email:''
          })
          )
    }
    render(){
        return(<div className="cform">
                <label> Contac Form</label>
                <Viewlist items={this.state.item} />
                <form onSubmit={this.formSubmit}>
                <input type="text" id="name" onChange={this.inputChnage} placeholder="Enter Name" value={this.state.name}/>
                <br/>
                <input type="text"  id="email" onChange={this.inputChnage} placeholder="Enter Email" value={this.state.email}/>
                <br/>

                <button>Submit</button>
                </form>
              

        </div>)
    }

}

 function Viewlist(props) {

  //render(){
   return(<div>
    {console.log(props)}
            <h2>Contact List</h2>
            <ul>
                {props.items.map(item=>(
                    <li><b>Name:</b> {item.name} <b>Email: </b> {item.email}</li>
                ))

                }
            </ul>
            </div>)
  // }


}

export default ContactForm;