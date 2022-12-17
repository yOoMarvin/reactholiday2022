async function fetchPokemonByName(name) {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

    return await res.json()
}

export default async function PokemonPage({ params }) {
    let pokemon = await fetchPokemonByName(params.name)
    //console.log(pokemon)

    return (
        <main>
            <h1 className="text-2xl font-bold capitalize">{pokemon.name}</h1>
            <div className="mt-4 flex flex-row space-x-4">
                {pokemon.types.map((type) => (
                    <div
                        key={type.type.name}
                        className="rounded-md bg-orange-100 bg-opacity-10 px-2 py-1 text-xs capitalize text-orange-400"
                    >
                        {type.type.name}
                    </div>
                ))}
            </div>
        </main>
    )
}