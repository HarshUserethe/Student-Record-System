
import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards';
import Navigation from './Components/Navigation';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
 




function App() {

 
  const [data, setData] = useState([]);


  const [input, setInput] = useState({
    name:"",
    enroll:"",
    mobile:"",
    stream:"",
    url:""
  });


  const handelInputValue = (e)=>{
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
 
  const addData = () => {
    setData([...data, {...input}]);
    setInput({
      ...input,
      name: "",
      enroll: "",
      mobile: "",
      stream: "",
      url: ""
    })
  }
 
  
  const removeData = (index) => {
  const newData = data;
  newData.splice(index, 1);
  setData([...newData]);
  }
 
  const cancel = () =>{
    setInput({
      ...input,
      name: "",
      enroll: "",
      mobile: "",
      stream: "",
      url: ""
    })
  }

  return (
<div className="main">
<div className="nav">
<Navigation />
</div>

<div className="form">
    <TextField className='input' value={input.name} onChange={handelInputValue}  name='name' id="outlined-basic1" label="Full Name" variant="outlined" />
    <TextField className='input' value={input.enroll} onChange={handelInputValue}  name='enroll' id="outlined-basic2" label="Enrollment" variant="outlined" />
    <TextField className='input' value={input.mobile} onChange={handelInputValue}  name='mobile' id="outlined-basic3" label="Mobile" variant="outlined" />
    <TextField className='input' value={input.stream} onChange={handelInputValue}  name='stream' id="outlined-basic4" label="Stream" variant="outlined" />
    <TextField className='input' value={input.url} onChange={handelInputValue}  name='url' id="outlined-basic5" label="Image URL" variant="outlined" />
<div className="btn">
    <Stack spacing={2} direction="row">
      
      <Button className='btns' onClick={addData} variant="contained">Submit</Button>
      <Button className='btns' onClick={cancel} variant="contained" style={{background: "red"}}>Cancel</Button>
     
    </Stack>  
</div>
</div>

<div className="right">
    
   

  {  
    
     
    data.map((elem, index) => {
      
      return(
       <div className="wrapper">
         <RemoveCircleIcon onClick={() => removeData(index)} style={{position: "absolute", right:"11vw", marginTop:"4vh", color:"red", cursor:"pointer", fontSize:"1.8vw" }}/>
        <Cards key={index} name={elem.name} enroll={elem.enroll} mobile={elem.mobile} stream={elem.stream} url={elem.url} />
       </div>
      )
    })
  }
</div>
</div>   

  );
}

export default App;
