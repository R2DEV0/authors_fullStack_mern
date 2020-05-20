import React, {useState} from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import EditPage from './views/EditPage';
import AddNew from './views/AddNew';


function App() {
    const [author, setAuthor] = useState([]);
    const [id, setId] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');


  return (
    <div className="container" style={{marginTop: '20px'}}>
      <Router>
        <Main path ='/' author={author} setAuthor={setAuthor} id={id} setId={setId} first_name={first_name} setFirst_name={setFirst_name} last_name={last_name} setLast_name={setLast_name}/>
        <AddNew path ='/add' author={author} setAuthor={setAuthor} id={id} setId={setId} first_name={first_name} setFirst_name={setFirst_name} last_name={last_name} setLast_name={setLast_name}/>
        <EditPage path ='/edit/:id' author={author} setAuthor={setAuthor} id={id} setId={setId} first_name={first_name} setFirst_name={setFirst_name} last_name={last_name} setLast_name={setLast_name}/>
      </Router>
    </div>
  );
}

export default App;
