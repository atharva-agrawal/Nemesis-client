import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Show() {
  const classes = useStyles();

  const [usersList, setUserList] = useState([])

  const deleteUser = (id) => {
    axios.delete(`https://assignmentforinternbackend.herokuapp.com/users/${id}`).then( () => {
      window.location.reload(false);
    })
  }

  useEffect(() => {
      axios.get('https://assignmentforinternbackend.herokuapp.com/users').then( (allUsers) => {
          setUserList(allUsers.data);
      } )
  }, [])

  return (
    <>
    <h2>Show</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserName</StyledTableCell>
            <StyledTableCell align="right">Mobile No.</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.map((user, key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">
                {user.userName}
              </StyledTableCell>
              <StyledTableCell align="right">{user.mobileNumber}</StyledTableCell>
              <StyledTableCell align="right">{user.email}</StyledTableCell>
              <StyledTableCell align="right">{user.address}</StyledTableCell>
              <StyledTableCell align="right">
              <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteUser(user._id)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
