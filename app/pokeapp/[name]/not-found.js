import Link from 'next/Link'

export default function PokemonNotFound() {
    return (
        <div>
            <Link
                href="/pokeapp"
                className="transition-all duration-300 ease-out hover:text-blue-500"
            >
                ← Back
            </Link>
            <div className="mt-4 text-lg font-medium">
                🤷‍♂️ We could not find that Pokemon!
            </div>
        </div>
    )
}
