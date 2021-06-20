import React from 'react'


function Error(props){
    return (
        <div className="text-center">
            <h1>{props.error.message}</h1>
        </div>
    )
}


export default Error