import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>The username is {props.username}</p>
            <p>Second Paragraph</p>
        </div>
    );
}

export default userOutput;