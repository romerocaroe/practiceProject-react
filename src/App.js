import React, {useState, useEffect} from 'react';
import ShowBook from './components/ShowBook';
import Navbar from './components/Navbar';

function App() {
  const [books, setBooks] = useState([]);
  
  //fetch with the backend
  useEffect(() => {
    fetch(process.env.REACT_APP_BACK_URL+'/api/books')
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      setBooks(response);
    })
    .catch(err => console.log(err))
  },[]);

  return(
    <div className="App">
        <Navbar />
      <div className="ShowBook">
        <ShowBook books={books} />
      </div>
    </div>
  );
}

export default App;