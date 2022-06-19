import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About.js';
import Contact from './Contact';
import About_Props from './About-props';
function App() {

  const [name,setName] = useState("aman")

  return (
    <div className="App">
    <h2> Homa Page Component</h2>
     <About  name={name} age="20"/>
     <button onClick={()=>{setName("satyendra")}}>click me app</button>
     {/* <Contact /> */}
     <About_Props />
    </div>
  );
}

export default App;



<script type="text/babel">
class Hello extends React.Component {

  ComponentDidMount()
  {
      console.warn("Hello rect")
  }
  render(){
      return <h1>Hello World!</h1>;

  }
}

ReactDOM.render(<Hello />, document.getElementById('mydiv'))
</script>