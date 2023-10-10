import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Textfield = () => {
   

  const [input, setInput] = useState({
    name: "",
    enroll: "",
    mobile: "",
    stream: "",
    url: ""
  });

  const handelInputVal = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }



  return (
   

   
  )
}

export default Textfield