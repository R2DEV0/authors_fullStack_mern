import React, { useEffect } from 'react';
import { navigate } from '@reach/router';


export default (props) => {
    const {first_name, setFirst_name, last_name, setLast_name, onClickHandler } = props;
    
    useEffect(() => {
        setFirst_name("");
        setLast_name("")
    }, []);

    
    return(
        <div className='form-contol'>
            <label htmlFor='first_name'style={{marginRight: '5px'}} >First Name: </label>
            <input type='text' name={first_name} onChange={(e)=> {setFirst_name(e.target.value)}} style={{borderRadius: '5px'}}/>
            <br/>
            <label htmlFor='last_name'style={{marginRight: '5px'}} >Last Name: </label>
            <input type='text' name={last_name} onChange={(e)=> {setLast_name(e.target.value)}} style={{borderRadius: '5px'}}/>
            <br/>
            <input style={{marginRight: '5px'}} type='submit' className='btn btn-primary btn-md' value='submit' onClick={e => onClickHandler(e, {first_name, last_name})}/>
            <input type='reset' className='btn btn-secondary btn-md'/>
        </div>
    )
}