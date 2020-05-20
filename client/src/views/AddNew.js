import React, {useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';


export default (props) => {
    const {first_name, setFirst_name, last_name, setLast_name } = props;
    const [errors, setErrors] = useState([]);

    const onClickHandler = (e, data) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', data)
            .then(res=> {
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
                <h5 style={{marginTop: '20px'}}>Add New Author: </h5>
            </div>
            <Form onClickHandler={onClickHandler} first_name={first_name} setFirst_name={setFirst_name} last_name={last_name} setLast_name={setLast_name}/>
            {errors.map((error, idx)=> {
                return(
                    <p style={{ color:'red' }}key={idx}>{error}</p>
                )
            })}
        </div>
    )
}