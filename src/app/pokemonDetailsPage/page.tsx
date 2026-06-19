"use client";

import { displayPokemonDetails } from "@/src/components/coreComponent";
import {useSearchParams} from "next/navigation";
import { useEffect, useState } from "react";

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
    async function fetchPokemonDetails() {
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
    fetchPokemonDetails();
    
  }, []);


  return (
    <div className="flex flex-col items-centerbg-[#F5F5F5] dark:bg-[#181A1B]">
        <div className=" bg-[#F5F5F5] dark:bg-[#181A1B]">
          <h3 className="text-2xl font-bold mb-4">Pokemon Browser</h3>
        </div>

        <div className="">
            <div className="bg-[#18181B33] opacity-20"></div>
            <div className=" flex col 2 gap-4 justify-center items-center">
                <div className="flex flex-col items-center">
                    <img src={pokemonDetails?.imageUrl} alt={pokemonDetails?.name} className="object-cover"></img>
                    <p className="text-lg font-medium">Name: {pokemonDetails?.name}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-4">Pokemon Details</h1>
                    <p className="text-lg font-medium">Name: {pokemonDetails?.name}</p>
                </div>
            </div>
        
        </div>
    </div>
  );
 
}


