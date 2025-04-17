import React from 'react'
import { Grid, TextField, Box } from '@mui/material';


const LogIn = () => {
  return (
    <div id='login'>

      <TextField id="outlined-basic" label="ID" variant="outlined" />

      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <button className='loginBtn'>로그인</button>

    </div>
  )
}

export default LogIn
