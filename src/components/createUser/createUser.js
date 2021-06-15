import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  const [ user, setUsers ] = useState({

    userName: '',
    mobileNumber: Number,
    email: '',
    address: ''
  })

  const createUsers = () => {
    console.log("hi");
      axios.post('http://localhost:5000/users/create', user).then( (val) => {
        console.log(val);
        console.log(val.body);
        window.location.reload(false);
      })
  }
  

  return (
    <>
    <h2>Create</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="User Name" variant="outlined" value={user.userName} onChange={(event => {
          setUsers({...user, userName: event.target.value})
      })} />
      <TextField id="outlined-basic" label="Mobile Number" variant="outlined" value={user.mobileNumber} onChange={(event => {
          setUsers({...user, mobileNumber: event.target.value})
      })} />
      <TextField id="outlined-basic" label="Email" variant="outlined" value={user.email} onChange={(event => {
          setUsers({...user, email: event.target.value})
      })} />
      <TextField id="outlined-basic" label="Address" variant="outlined" value={user.address} onChange={(event => {
          setUsers({...user, address: event.target.value})
      })} />
      <Button variant="contained" color="primary" onClick={createUsers}>
        Submit
      </Button>
    </form>
    </>
  );
}
