import React from 'react'

export default function TimeAndDate(props) {
    let date = new Date().toLocaleDateString();
    let cTime = new Date().toLocaleTimeString();

        
  return (
    <>
    <div className='container'>
        <div className='textAndDate'>
            <h2>{props.timeTitle}</h2>
            <p> Current Date is: {date}</p>
            <p> Current Time is: {cTime}</p>
        </div>

    </div>

    </>
  )
}
