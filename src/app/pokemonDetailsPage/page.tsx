"use client";

import { inter } from "@/src/utils/fontHelper";
import { displayPokemonDetails } from "../../components/coreComponent";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator"
import { ReturnBtn } from "../../components/button/buttonComponent"
import { AbilityCard, InfoCard, OverviewCard, SideCard, StatsCard } from "../../components/card/statsCardComponent"
import SpinnerComponent from "@/src/components/spinner/spinnerComponent";


// Pokemon details page - displays detailed information about a specific Pokemon
export default function PokemonDetailsPage() {

    const [loading, setLoading] = useState<boolean>(true);
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
            try {
                if (pokemonName === null) {
                    throw new Error("Invalid Pokémon name or ID");
                }
                const data = await displayPokemonDetails(pokemonName, pokemonId);
                setPokemonDetails(data);
            } catch (error) {
                console.error(`Error displaying details for Pokémon ${pokemonName}:`, error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 500); // delay to show the spinner - remove for production
            }
        }
        fetchData(pokemonName, pokemonId);

    }, [pokemonName, pokemonId]);


    return (
        <div className="flex flex-col w-full min-h-screen gap-12 opacity-100">
            <main className="flex flex-col w-full max-w-6xl mx-auto py-16 px-6 bg-white dark:bg-black">

                <div className={`${inter.className}  dark:bg-[#181A1B]`}>
                    <h3 className="text-2xl font-bold mb-4 text-left">Pokémon  Browser</h3>
                </div>

                <div className="flex flex-col justify-center gap-2 text-center">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <SpinnerComponent />
                        </div>
                    ) : (
                        <>
                            {/* top bar and section */}

                            <div className="h-[380px] w-full relative">

                                <div className=" h-[240px] bg-[#18181B33] "></div>

                                    <div className="absolute top-[120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">

                                        <div className=" flex flex-col items-center justify-center gap-4 ">
                                            <div className="w-[208px] h-[208px] rounded-full overflow-hidden bg-white flex items-center justify-center ">
                                                <img src={pokemonDetails?.imageUrl} alt={pokemonDetails?.name} className="object-cover w-[208px] h-[208px]"></img>

                                            </div>

                                            <div className="flex items-center gap-2">

                                                <p className={`${inter.className} flex text-lg font-medium text-[30px]`}> {pokemonDetails?.name }</p>
                                                <p className={`${inter.className} flex text-lg font-medium text-[30px] text-[#71717A]`}>{"#" + pokemonDetails?.number}</p>

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
                                    <StatsCard hp={pokemonDetails?.hp} attack={pokemonDetails?.attack} defense={pokemonDetails?.defense} sAttack={pokemonDetails?.specialAttack} sDefense={pokemonDetails?.specialDefense} speed={pokemonDetails?.speed} />
                                </div>
                            </div>
                        </>
                    )}
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


