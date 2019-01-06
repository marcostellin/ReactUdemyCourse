import React from 'react';

const validation = (props) => {
   let validationResult = null;
   
   if (props.textLength > 5) {
       validationResult = <p>Text long enough!</p>
   } else {
       validationResult = <p>Text too short!</p>
   }
   
   return (
       <div> {validationResult} </div>
   )
}

export default validation;