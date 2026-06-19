import "../app/globals.css";
import { Separator } from "@/components/ui/separator"
import CardComponent from "../components/card/cardComponent"
import {fetchPokemonDataFromList} from "../components/coreComponent"
import {BackBtn, NextBtn, SearchBtn} from "../components/button/buttonComponent"
import {InputComponent} from "../components/input/inputComponent"
import {inter} from "../utils/fontHelper"
import SpinnerComponent from "../components/spinner/spinnerComponent"
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [page, setPage] = useState(1);
  const [pokemonListState, setPokemonListState] = useState<any[]>([]);
  const [pokemonName, setPokemonName] = useState("");
  const [searchPokemonList, setSearchPokemonList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  console.log("Current Pokémon list state:", pokemonListState);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { pokemonList } = await fetchPokemonDataFromList();
        setPokemonListState(pokemonList);
      }
      catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
      finally {
        setTimeout(() => {
          setLoading(false);
        }, 500); 
      }
    }
    fetchData();
  }, []);
      

  return (
    <div className="flex flex-col w-full min-h-screen gap-12 opacity-100">
        <main className="flex flex-col w-full max-w-6xl mx-auto py-16 px-6 bg-white dark:bg-black">

            <div className="flex flex-col justify-center gap-2 text-center">
            <h1 className={`${inter.className} text-6xl leading-[78px] font-semibold text-[#181A1B] dark:text-zinc-50 `}>
                Pokémon Browser
            </h1>
            <h2 className={`${inter.className} text-[#181A1B] text-3xl text-zinc-600 dark:text-zinc-400`}>
                Search and find Pokémon 
            </h2>
            </div>

            <Separator className="my-8" />
            <div className="flex flex-col pl-[140px] pr-[140px]">

            <div className="flex w-full justify-between items-center">
            <h2 className={`${inter.className} text-[#181A1B] text-[30px] font-semibold tracking-[-0.025em] `}>
                Explore Pokémon
            </h2>
            <div className="flex  gap-3">
                <InputComponent value={pokemonName} onChange={setPokemonName} />
                <SearchBtn pokemonName={pokemonName} pokemonListState={pokemonListState} searchPokemonList={searchPokemonList} setSearchPokemonList={setSearchPokemonList} page={page} setPage={setPage} />
            </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-8 flex justify-between px-0 opacity-100">
              {
                loading ===true ? <div className="col-span-4 flex justify-center"><SpinnerComponent /></div> :
                page === 0 ? handleCardLoad(searchPokemonList, loading, page) : handleCardLoad(pokemonListState, loading, page)
              }
            </div>
            </div>
            <div className="flex  gap-3 justify-center mt-8">
                <BackBtn page={page} setPage={setPage} />
                <NextBtn page={page} setPage={setPage} />
            </div>

            <Separator className="my-8" />

            <footer className="flex flex-col items-center justify-center gap-2 py-6 text-center">
            <p className={`${inter.className} text-[#181A1B] font-semibold text-zinc-600 dark:text-zinc-400`}>
                Thank you for using Pokémon Browser!
            </p>
            </footer>
        </main>
    </div>
  );

}

function handleCardLoad(list: any[], loading: boolean = false, page: number) {
  try {
    if( page === 0) {
      return list.map((pokemon: any) => {
        return returnCardDetail(pokemon);
      })
    }
    if (page === 1) {
    return list.slice(0, 12).map((pokemon: any) => {
      return returnCardDetail(pokemon);
    })
    }
    else if (page === 2) {
      return list.slice(12, 24).map((pokemon: any) => {
       return returnCardDetail(pokemon);
      })
    }
  }
  catch (error) {
    console.error("Error loading Pokémon cards:", error);
  }
  return null;
}

export function returnCardDetail(pokemon: any) {
  return (
  <CardComponent
    key={pokemon.name}
    name={pokemon.name}
    imageUrl={pokemon.imageUrl}
    number={pokemon.number}
    type={pokemon.type}
  />
  )
}


        

