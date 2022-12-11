'use client'

export default function QuotesErrorPage({ error }) {
    return (
        <div className="mx-auto w-full text-center">
            <h1 className="mt-16 text-3xl font-bold text-red-400">
                🤷 Something went wrong!
            </h1>
            <p className="mt-4 text-red-100">
                Try to reload the page or try again later.
            </p>
            <p className="mt-4 text-sm text-red-100">
                {JSON.stringify(error, null, 2)}
            </p>
        </div>
    )
}
