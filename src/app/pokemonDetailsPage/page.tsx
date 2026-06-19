"use client";

import { inter } from "@/src/utils/fontHelper";
import { displayPokemonDetails } from "../../components/coreComponent";
import {useSearchParams} from "next/navigation";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator"
import {returnBtn} from "../../components/button/buttonComponent"

export default function PokemonDetailsPage() {

    const [loading, setLoading] = useState<boolean>(false);
    const [pokemonDetails, setPokemonDetails] = useState<any>(null);

  const searchParams = useSearchParams();
  if (searchParams == null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Failed to load Pokémon details.</p>
      </div>
    );
  }
  const pokemonName = searchParams.get("pokemonName");

  useEffect(() => {
    async function fetchData(pokemonName: string | null) {
        setLoading(true);
        const timer = setTimeout(() => {
        setLoading(false);
        }, 1000);

        try{
            const data = await displayPokemonDetails(pokemonName || "");
            setPokemonDetails(data);
        } catch (error) {
            console.error(`Error displaying details for Pokémon ${pokemonName}:`, error);
        }finally {
            clearTimeout(timer);
            setLoading(false);
        }
    }
    fetchData(pokemonName);
    
  }, [pokemonName]);


  return (
    <div className="flex flex-col w-full min-h-screen gap-12 opacity-100">
        <main className="flex flex-col w-full max-w-6xl mx-auto py-16 px-6 bg-white dark:bg-black">
            <div className="flex flex-col justify-center gap-2 text-center">
                <div className={`${inter.className}  dark:bg-[#181A1B]`}>
                <h3 className="text-2xl font-bold mb-4">Pokemon Browser</h3>
                </div>

                <div className=" dark:bg-[#181A1B]">
                    <div className="h-1/2 bg-[#F5F5F5]"></div>
                    
                    <div className=" flex col 2 gap-4 justify-center items-center">    
                        <div className="flex flex-col items-center">
                            <img src={pokemonDetails?.imageUrl} alt={pokemonDetails?.name} className="object-cover"></img>
                           
                        </div>

                        <div className="flex flex-col items-center">
                             <p className="text-lg font-medium"> {pokemonDetails?.name + " #" + pokemonDetails?.number}</p>
                            
                        </div>

                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 mt-4">
            
                <div className="flex flex-col items-center gap-2 mt-4">
                    <p className="text-sm font-medium">Type: {pokemonDetails?.type}</p>
                    <p className="text-sm font-medium">Height: {pokemonDetails?.height}</p>
                    <p className="text-sm font-medium">Weight: {pokemonDetails?.weight}</p>
                    <p className="text-sm font-medium">Abilities: {pokemonDetails?.ability}</p>
                </div>
                </div>
                <div className="flex flex-col items-center gap-2 mt-4">
                    {returnBtn()}
                </div>
                <Separator className="my-8" />
            </div>
            <footer className="flex flex-col items-center justify-center gap-2 py-6 text-center">
            <p className={`${inter.className} text-[#181A1B] font-semibold text-zinc-600 dark:text-zinc-400`}>
                Thank you for using Pokémon Browser!
            </p>
            </footer>
        </main>
    
    </div>
  );
}


