import React, { useState } from 'react';
import propTypes from 'proptypes';

export default function TextForm(props) {

    const [text, SetText] = useState('');
    const clickTextUC = () => {
        let updatedText = text;
        SetText(updatedText.toUpperCase());
    }
    const clickTextLC = () => {
        let updatedText = text;
        SetText(updatedText.toLowerCase());
    }
    // const clickTextClear = () => {
    //     let updatedText = text;
    //     SetText(updatedText.(' '));
    // }
    
    const handleOnChange = (event) => {
        console.log("On change");
        SetText(event.target.value);
    }
   

  return (
    <>

        <div className="container">
            <div className='my-5'>
            <h2 className='mb-3'>{props.formTitle}</h2>
                <textarea className="form-control" rows={8} value={text} placeholder='Enter Your text here' onChange={handleOnChange} ></textarea>
                <div className="d-flex mt-3">
                    <button onClick = {clickTextUC} className="btn btn-primary me-2">UPPER CASE</button>
                    <button onClick = {clickTextLC} className="btn btn-primary me-2">lower case</button>
                    <button onClick = {clickTextLC} className="btn btn-primary me-2">Sentext case</button>
                    <button onClick = {clickTextLC} className="btn btn-primary me-2">Capitalized Case</button>
                    <button onClick = {clickTextLC} className="btn btn-primary me-2">aLtErNaTiNg cAsE</button>
                    <button onClick = {clickTextLC} className="btn btn-primary me-2">Lowercase</button>
                    {/* <button onClick = {clickTextClear} className="btn btn-primary me-2">Clear</button> */}
                </div>

                <div className="d-flex mt-3">
                    <p className='me-2'>Character Count: {text && text.trim().length}</p>
                    <p>Word Count: { text.split(' ').length } </p>
                    

                </div>
                <p>Mintues Read: { 0.008 * text.split(' ').length }</p>
            </div>
        </div> 
    </>
  )
}

TextForm.propTypes = {
    formTitle : propTypes.string.isrequired,
}

TextForm.default = {
    formTitle : 'Enter Text Here',
}

