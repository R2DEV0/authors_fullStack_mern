import React from 'react';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton'


export default (props) => {
    const { author, setId, setAuthor } = props;

    const editButton = (e) => {
        e.preventDefault();
        setId(e.target.id)
        navigate('/edit/'+e.target.id)
    }

    const removeFromDom = id => {
        setAuthor(author.filter(author => author._id !== id))
    }

    return(
    <div>
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {author.map((person, i) => { return <tr key = {i}> 
                        <td> {person.first_name} {person.last_name}</td>
                        <td> <button className='btn btn-primary btn-sm' onClick={editButton} id={person._id}>Edit</button> <DeleteButton id={person._id} successCallback={()=>removeFromDom(person._id)}/> </td>
                    </tr>})}
                </tbody>
            </table>
        </div>
    </div>
    )
}