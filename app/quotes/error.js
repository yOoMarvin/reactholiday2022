'use client'

import { useEffect } from 'react'

export default function QuotesErrorPage({ error, reset }) {
    useEffect(() => {
        //Log error here
        console.log(error)
    }, [error])
    return (
        <div className="mx-auto w-full text-center">
            <h1 className="mt-16 text-3xl font-bold text-red-400">
                🤷 Something went wrong!
            </h1>
            <p className="mt-4 text-red-100">
                Try to reload the page or try again later.
            </p>
            <div className="mx-auto mt-8 flex w-1/2 flex-row items-center justify-between rounded-md border-2 border-red-500 bg-red-900 bg-opacity-20 p-2 text-sm">
                <div className="flex flex-row space-x-2">
                    <p>❌</p>
                    <p className="text-red-50">
                        {JSON.stringify(error, null, 2)}
                    </p>
                </div>
                <button
                    className="rounded-md bg-red-500 p-2 text-sm font-medium text-white"
                    onClick={() => reset()}
                >
                    Reset error boundary
                </button>
            </div>
        </div>
    )
}
