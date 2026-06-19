import {Button} from "@/components/ui/button";
import {ArrowLeftIcon, ArrowRightIcon} from "lucide-react";
import {inter} from "../../utils/fontHelper"

interface ButtonProps {
  page: number;
  setPage:React.Dispatch<React.SetStateAction<number>>;
}

export function BackBtn({ page, setPage }: ButtonProps) {
  return (
    <Button variant="outline" className={`${inter.className} bg-[#181A1B] text-white flex items-center gap-2 shadow-md rounded-md border px-3 py-1`} onClick={() => {
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
    <Button variant="outline" className={`${inter.className} bg-[#181A1B] text-white flex items-center gap-2 shadow-md rounded-md border px-3 py-1`} onClick={() => {
      console.log("Next button clicked. Current page:", page);
      setPage(page + 1);
      console.log("Next button clicked. Current page:", page + 1);
    }}>
      Next
      <ArrowRightIcon className="w-4 h-4" />
    </Button>
  );
}
export function SearchBtn() {
  return (
    <Button variant="outline" className={`${inter.className} bg-[#181A1B] text-white flex items-center shadow-md rounded-md gap-2 px-4 py-2`} 
    onClick={() => {
      
    }}>
      Search
    </Button>
  );
}