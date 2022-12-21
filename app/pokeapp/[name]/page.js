import Image from 'next/image'
import { notFound } from 'next/navigation'

async function fetchPokemonByName(name) {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (!res.ok) {
        return undefined
    }
    return await res.json()
}

export default async function PokemonPage({ params }) {
    let pokemon = await fetchPokemonByName(params.name)
    if (!pokemon) {
        notFound()
    }
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
            <Image
                className="mt-4"
                src={pokemon.sprites.front_default}
                alt={`$pokemon.name} front`}
                width="96"
                height="96"
            />
        </main>
    )
}
