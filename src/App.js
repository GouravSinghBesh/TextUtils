import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [text, settext] = useState('Enable Dark Mode')
  const togglemode =()=>{
    if(mode ==="light"){
      setmode('dark') 
      document.body.style.backgroundColor = '#0c3570f5';
      settext('Enable Light Mode')
    }else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      settext('Enable Dark Mode')
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title = "TextUtils" mode= {mode} toggleMode = {togglemode} text={text}/>
    <div className="container my-3">
    <Routes>
      <Route path="/" element={<TextForm heading = "Enter Your Text Here " mode={mode} />}> </Route>
        <Route path="/about" element={<About  mode={mode} />}></Route> 
    </Routes>
   </div>
   </BrowserRouter>
    </>
    
  );
}

export default App;
