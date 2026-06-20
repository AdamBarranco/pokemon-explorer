"use client";

import { inter } from "@/src/utils/fontHelper";
import { displayPokemonDetails } from "../../components/coreComponent";
import {useSearchParams} from "next/navigation";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator"
import {ReturnBtn} from "../../components/button/buttonComponent"
import {AbilityCard, InfoCard, OverviewCard, SideCard, StatsCard} from "../../components/card/statsCardComponent"

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
  const pokemonId = Number(searchParams.get("pokemonId"));

  useEffect(() => {
    async function fetchData(pokemonName: string | null, pokemonId: number) {
        setLoading(true);
        const timer = setTimeout(() => {
        setLoading(false);
        }, 1000); // delay to show the spinner - remove for production

        try{
            if(pokemonName === null) {
                throw new Error("Invalid Pokémon name or ID");
            }
            const data = await displayPokemonDetails(pokemonName, pokemonId);
            setPokemonDetails(data);
        } catch (error) {
            console.error(`Error displaying details for Pokémon ${pokemonName}:`, error);
        }finally {
            console.log("Pokemon details fetched:", pokemonDetails);
            clearTimeout(timer);
            setLoading(false);
        }
    }
    fetchData(pokemonName, pokemonId);
    
  }, [pokemonName, pokemonId]);


  return (
    <div className="flex flex-col w-full min-h-screen gap-12 opacity-100">
        <main className="flex flex-col w-full max-w-6xl mx-auto py-16 px-6 bg-white dark:bg-black">
            <div className="flex flex-col justify-center gap-2 text-center">

                {/* top bar and section */}

                <div className="w-full">
                    <div className={`${inter.className}  dark:bg-[#181A1B]`}>
                    <h3 className="text-2xl font-bold mb-4 text-left">Pokemon Browser</h3>
                    </div>

                    <div className=" dark:bg-[#181A1B]">
                        <div className="h-1/2 bg-[#F5F5F5]">
                        
                        <div className=" flex flex-col items-center justify-center gap-4 ">    
                            <div className="w-32 h-32 rounded-full overflow-hidden bg-white flex items-center justify-center ">
                                <img src={pokemonDetails?.imageUrl} alt={pokemonDetails?.name} className="object-cover"></img>
                            
                            </div>

                            <div className="text-lg font-medium text-center">
                                <p className="text-lg font-medium"> {pokemonDetails?.name + " #" + pokemonDetails?.number}</p>
                                
                            </div>

                        </div>
                        </div>
                    </div>
                </div>

                {/* info card */}
                <div className="flex flex-col gap-4 mt-8">
                    <InfoCard content={pokemonDetails?.description} />
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-4 items-stretch">
            
                {/* left side */}
                <div className="col-start-1 row-start-1 row-span-2 ">
                    <SideCard height={pokemonDetails?.height} category={pokemonDetails?.category} weight={pokemonDetails?.weight} gender={pokemonDetails?.gender} />
                </div>

                {/* right side */}
                
                    <div className="col-start-2 row-start-1">
                        <OverviewCard type={pokemonDetails?.type} weaknesses={pokemonDetails?.weaknesses} />
                    </div>
                    <div className="col-start-3 row-start-1">
                        <AbilityCard abilities={pokemonDetails?.abilities} />
                    </div>
                
                <div className="col-start-2 col-span-2 row-start-2 h-full">
                    <StatsCard hp={pokemonDetails?.hp} attack={pokemonDetails?.attack} defense={pokemonDetails?.defense} sAttack={pokemonDetails?.sAttack} sDefense={pokemonDetails?.sDefense} speed={pokemonDetails?.speed} />
                </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-8">
                
                <div className="flex flex-col items-start gap-2 mt-4">
                    <ReturnBtn />
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


