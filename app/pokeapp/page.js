import NavLink from '/components/NavLink'
export default async function PokeappPage() {
    let res = await fetch('https://pokeapi.co/api/v2/pokemon')
    let data = await res.json()

    return (
        <main>
            <div className="flex flex-col space-y-2">
                {data.results.map((pokemon) => (
                    <NavLink
                        key={pokemon.name}
                        href={'/pokeapp/' + pokemon.name}
                    >
                        {pokemon.name}
                    </NavLink>
                ))}
            </div>
        </main>
    )
}
