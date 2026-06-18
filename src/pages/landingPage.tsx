import "../app/globals.css";
import { Separator } from "@/components/ui/separator"
import CardComponent from "../components/card/cardComponent"
import {fetchPokemonDataFromList} from "../components/coreComponent"
import {Button} from "@/components/ui/button";
import {PrevBtn, NextBtn} from "../components/button/buttonComponent"

const {pokemonList, loading} = await fetchPokemonDataFromList();
console.log("Fetched Pokémon data from the list:", pokemonList);

export default function LandingPage() {

    

  return (
    <div className="flex flex-col w-full min-h-screen gap-12 opacity-100">
        <main className="flex flex-col w-full max-w-6xl mx-auto py-16 px-6 bg-white dark:bg-black">

            <div className="flex flex-col justify-center gap-2 text-center">
            <h1 className="text-6xl leading-[78px] font-semibold text-[#181A1B] dark:text-zinc-50 ">
                Pokémon Browser
            </h1>
            <h2 className="text-lg text-zinc-600 dark:text-zinc-400">
                Search and find Pokémon 
            </h2>
            </div>

            <Separator className="my-8" />

            <div className="flex w-full justify-between items-center">
            <h2 className=" text-[30px] font-semibold tracking-[-0.025em] ">
                Explore Pokémon
            </h2>
            <div className="flex  gap-3">
                <Button variant="outline" >Find Pokémon</Button>
                <Button variant="outline" >Search</Button>
            </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-8">

              {
                pokemonList.slice(0, 12).map((pokemon: any) => (
                  <CardComponent
                    key={pokemon.name}
                    name={pokemon.name}
                    imageUrl={pokemon.imageUrl}
                    number={pokemon.number}
                    type={pokemon.type}
                  />
                ))
              }
            </div>
            <div className="flex  gap-3 justify-center mt-8">
                <PrevBtn />
                <NextBtn />
            </div>
        </main>
    </div>
  );
}


        

