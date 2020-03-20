import React, {useState, useEffect} from 'react';
import ShowBook from './components/ShowBook';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';

function App() {
  const [books, setBooks] = useState([]);

  //fetch with the backend
  useEffect(() => {
    fetch('http://localhost:8888/api/books')
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      setBooks(response);
    })
    .catch(err => console.log(err))
  },[]);

  //header
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      palette: {
        primary: teal[400],
        secondary: grey[800]
      }
    }));
    const classes = useStyles();

  return(
    <div className="App">
      <header>
        <div className={classes.root}>
            <AppBar position="static" style={{background: '#78909c'}}>
                <Toolbar variant="dense">
                <Typography variant="h6" style={{color: '#eceff1'}}>
                  La biblioteca de Sondeos
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
      </header>
      <ShowBook books={books} />
    </div>
  );
}

export default App;