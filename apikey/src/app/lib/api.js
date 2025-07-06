import Link from "next/link";

export async function ApiKey() {
    const apiKey = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
    const pokemon = await apiKey.json()
    const pokemonList = pokemon.results.map((pokemon) => pokemon.name)  
        return (
            <div className="flex flex-col gap-4 justify-center items-center mt-12">
                <h1 className="text-2xl font-bold underline">PokeApi</h1>

                <div className="flex flex-col gap-4 items-center">
                    {pokemonList.map((pokemon) => (
                        <Link key={pokemon} href={`/pokemon/${pokemon}`}>{pokemon}</Link>
                    ))}
                </div>
            </div>
        )
}