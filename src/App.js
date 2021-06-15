import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Show from './components/showUser/showUser.js';
import Create from './components/createUser/createUser.js';
import useStyles from './styles.js';
import './App.css';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth='lg'>
        <AppBar className={classes.appBar} position = 'static' color = 'inherit'>
          <Typography className={classes.heading} variant = 'h2' align = 'center'> Users Create & Show </Typography>
        </AppBar>
      <Grow in>
        <Container>
          <Grid container justify = 'space-between' alignItems = 'stretch'>
            <Grid item xs = {12} sm = {7}>
              <AppBar className = {classes.appBar} position = 'static' color = 'inherit'>
                <Show />
              </AppBar>
            </Grid>
            <Grid item xs = {12} sm = {4}>
            <AppBar className = {classes.appBar} position = 'static' color = 'inherit'>
                <Create />
              </AppBar>
            </Grid>
          </Grid>
        </Container>
      </Grow>
      </Container>

    </div>
  );
}

export default App;
