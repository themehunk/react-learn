import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NaveBar from './componanet/navebar';
import logo from './logo.svg';
import './App.css';
import ContactForm from './Contact';
import Formlist from './componanet/Formlist';

function App() {
return(<>
 <div className="App">
 <NaveBar/>

<Router>
  <Routes> 

          {/* <Route path="/" element={<NaveBar />} /> */}
          <Route path="/contactus" element={<ContactForm />} />
          <Route path="/viewlist" element={<Formlist />} />
  </Routes>
</Router>
</div>
</>)

}

export default App;