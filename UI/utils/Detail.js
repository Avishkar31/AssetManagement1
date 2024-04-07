import React from 'react'

const Detail = ({label, value}) => {
    return (
        <div>
            <label>{label}</label>
            <span>{value}</span>
        </div>
    )
}

export default Detail