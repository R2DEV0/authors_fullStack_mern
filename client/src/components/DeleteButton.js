import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


export default (props) => {
    const { id, successCallback } = props;

    const onClick = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/authors/'+id)
            .then(res => {
                console.log(res);
                successCallback();
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <button className='btn btn-danger btn-sm' onClick={ onClick }> Delete </button>
    )
}