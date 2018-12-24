import React from 'react';

const userInput = (props) => {

    const style = {
        margin : '10px auto',
        width : '200px'
    }

    return (
        <input style={style} onChange={props.changed} type='text' value={props.username} />
    );
}

export default userInput;