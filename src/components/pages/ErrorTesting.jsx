import React from 'react'

function ErrorTesting({testing}) {

    if(testing === 'red') {
        throw new Error('this is an error')
    } else {
    return (
        <div className=''></div>
        )  
    }
}

export default ErrorTesting