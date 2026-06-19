import {Button} from "@/components/ui/button";
import {ArrowLeftIcon, ArrowRightIcon} from "lucide-react";
import {inter} from "../../utils/fontHelper"
import { returnCardDetail } from "@/src/pages/landingPage";
import {redirect} from "next/navigation";

interface ButtonProps {
  page: number;
  setPage:React.Dispatch<React.SetStateAction<number>>;
}
interface SearchButtonProps {
  pokemonName?: string;
  pokemonListState?: any[];
  searchPokemonList?: any[];
  setSearchPokemonList?: React.Dispatch<React.SetStateAction<any[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
 
}

export function BackBtn({ page, setPage }: ButtonProps) {
 
  if(page === 0) {
    return (
      <Button variant="outline" className={`${inter.className} bg-[#181A1B] text-white flex items-center gap-2 shadow-md rounded-md border px-3 py-1`} onClick={() => {
        setPage(1);
        console.log("Back button clicked. Current page:", page);
      }}>
        <ArrowLeftIcon className="w-4 h-4" />
      Back
    </Button>
    );
  }
    return (
    <Button disabled={page <= 1} variant="outline" className={`${inter.className} bg-[#181A1B] text-white flex items-center gap-2 shadow-md rounded-md border px-3 py-1`} onClick={() => {
      if (page > 1) {
        setPage(page - 1);
      }
      console.log("Back button clicked. Current page:", page);
    }}>
      <ArrowLeftIcon className="w-4 h-4" />
      Back
    </Button>
  );
}

export function NextBtn({ page, setPage }: ButtonProps) {
  return (
    <Button disabled={page === 0 || page > 2} variant="outline" className={`${inter.className} bg-[#181A1B] text-white flex items-center gap-2 shadow-md rounded-md border px-3 py-1`} onClick={() => {
      setPage(page + 1);
      console.log("Next button clicked. Current page:", page + 1);
    }}>
      Next
      <ArrowRightIcon className="w-4 h-4" />
    </Button>
  );
}
export function SearchBtn({pokemonName, pokemonListState, searchPokemonList, setSearchPokemonList, page, setPage }: SearchButtonProps) {
  return (
    <Button variant="outline" className={`${inter.className} bg-[#181A1B] text-white flex items-center shadow-md rounded-md gap-2 px-4 py-2`} 
    
    onClick={() => {

     if (pokemonName != null) { 
      const lowerCaseName = pokemonName.toLowerCase();
      const foundPokemon = pokemonListState?.find((pokemon) => pokemon.name.toLowerCase() === lowerCaseName);
      if (foundPokemon && setSearchPokemonList) {
        setSearchPokemonList([foundPokemon]);
        setPage(0);
      }
      console.log("Search button clicked. Current Pokémon name:", searchPokemonList);
    }
    }}>
      Search
    </Button>
  );
}

export function returnBtn(){
  return (<Button variant="outline" className={`${inter.className} bg-[#181A1B] text-white flex items-center shadow-md rounded-md gap-2 px-4 py-2`} 
    onClick={() => {
      redirect("/landingPage");
  }}>
    <ArrowLeftIcon className="w-4 h-4" />
    Return Home
  </Button>);
}