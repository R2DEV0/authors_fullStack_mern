import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';

export default (props) => {
    const {author, setAuthor, id, first_name, setFirst_name, last_name, setLast_name } = props;
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);


    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors/'+id)
            .then(res=> {
                setAuthor(res.data.author)
                setLoaded(true)
            })
    },[])

    const onClickHandler = (e, data) =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/update/'+id, data)
            .then(res => {
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr=[];

                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return(
        <div className='container'>
            <div>
                <h1> Favorite Authors </h1>
                <Link to ='/'>Go Home</Link>
                <h5 style={{marginTop: '20px'}}>Edit this Author: <strong>{ author.first_name } { author.last_name }</strong> </h5>
            </div>
            <div>
                { loaded && 
                <Form onClickHandler={onClickHandler} first_name={first_name} setFirst_name={setFirst_name} last_name={last_name} first_name={first_name} last_name={last_name} setLast_name={setLast_name}/> }
                {errors.map((error, idx)=> {
                return(
                    <p style={{ color:'red' }}key={idx}>{error}</p>
                )
            })}
            </div>
        </div>
    )
}