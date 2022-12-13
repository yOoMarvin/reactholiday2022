'use client'

import { useEffect } from 'react'

export default function QuotesErrorPage({ error, reset }) {
    useEffect(() => {
        //Log error here
        console.error(error)
    }, [error])
    return (
        <div className="mx-auto w-full text-center">
            <h1 className="mt-16 text-3xl font-bold text-red-400">
                🤷 Something went wrong!
            </h1>
            <button
                className="mt-4 rounded-md bg-red-500 p-2 text-sm font-medium text-white"
                onClick={() => reset()}
            >
                Reset error boundary
            </button>
        </div>
    )
}
