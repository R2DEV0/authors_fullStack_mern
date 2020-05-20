import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import AuthorList from '../components/AuthorList';

export default (props) => {
    const [loaded, setLoaded] = useState(false);
    const {author, setAuthor, id, setId, first_name, setFirst_name, last_name, setLast_name } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            setAuthor(res.data);
            setLoaded(true)
        })
    }, []);

    return(
        <div className='container'>
            <div>
                <h1> Favorite Authors </h1>
                <Link to ='/add'>Add New Author</Link>
                <h5 style={{marginTop: '20px'}}>We have quotes by:</h5>
            </div>
            {loaded && <AuthorList author={ author } setAuthor={ setAuthor } id={id} setId={setId} />}
        </div>
    )
};