import Link from 'next/Link'

export default async function PokeappPage() {
    let res = await fetch('https://pokeapi.co/api/v2/pokemon')
    if (!res.ok) {
        throw Error('Failed to fetch.')
    }
    let data = await res.json()

    return (
        <main>
            <div className="grid grid-cols-4 gap-4">
                {data.results.map((pokemon) => (
                    <Link
                        key={pokemon.name}
                        href={'/pokeapp/' + pokemon.name}
                        className=" rounded-md bg-white bg-opacity-5 p-4 text-center transition-all duration-300 ease-out hover:bg-opacity-10 hover:text-blue-500"
                    >
                        <span className="capitalize">{pokemon.name}</span>
                    </Link>
                ))}
            </div>
        </main>
    )
}
