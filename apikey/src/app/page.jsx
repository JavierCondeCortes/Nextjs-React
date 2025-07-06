import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default async function ApiKey() {
  const apiKey = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
  const pokemon = await apiKey.json()
  const pokemonList = pokemon.results.map((pokemon) => pokemon.name)

  return (
    <div className="flex flex-col gap-6 justify-center items-center mt-12 p-4">
      <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl underline">PokeAPI List</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl w-full">
        {pokemonList.map((pokemonName) => (
          <Link key={pokemonName} href={`/pokemon/${pokemonName}`} className="w-full">
            <Card
              className="hover:shadow-lg transition-shadow duration-200 ease-in-out h-full flex flex-col justify-between">
              <CardHeader className="pb-2">
                <CardTitle className="capitalize text-xl font-semibold text-center">{pokemonName}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                {/* You could add an image here if you fetch more details for each pokemon */}
                <span className="text-sm text-muted-foreground">Click to view details</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
