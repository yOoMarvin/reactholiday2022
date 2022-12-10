async function fetchData() {
    const res = await fetch('https://api.quotable.io/random')
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function QuotesPage() {
    const data = await fetchData()
    console.log(data)

    // let the page wait
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return (
        <div className="flex flex-col">
            <h1 className="text-xl font-bold">
                ✍️ Here is a random quote for you.
            </h1>
            <p className=" mt-8 font-medium">{data.content}</p>
            <p className=" mt-2 text-sm text-gray-200">-{data.author}</p>
            <div className="mt-4 flex flex-row space-x-2">
                {data.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="rounded-md bg-indigo-100 bg-opacity-10 px-2 py-1 text-xs text-indigo-400"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}
