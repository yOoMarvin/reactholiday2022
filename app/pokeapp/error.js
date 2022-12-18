'use client'

import React from 'react'

export default function PokeAppError({ error }) {
    React.useEffect(() => {
        //send error to reporting service
        console.log('Error: ', error)
    }, [error])
    return (
        <div>
            <p>Something went wrong!</p>
        </div>
    )
}
