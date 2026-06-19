import {Button} from "@/components/ui/button";
import {ArrowLeftIcon, ArrowRightIcon} from "lucide-react";
import {inter} from "../../utils/fontHelper"

export function BackBtn() {
  return (
    <Button variant="outline" className={`${inter.className} bg-[#181A1B] text-white flex items-center gap-2 shadow-md`} onClick={() => {
      // TODO handle back button click event
    }}>
      <ArrowLeftIcon className="w-4 h-4" />
      Back
    </Button>
  );
}

export function NextBtn() {
  return (
    <Button variant="outline" className={`${inter.className} bg-[#181A1B] text-white flex items-center gap-2 shadow-md`} onClick={() => {
      // TODO handle next button click event
    }}>
      Next
      <ArrowRightIcon className="w-4 h-4" />
    </Button>
  );
}
export function SearchBtn() {
  return (
    <Button variant="outline" className={`${inter.className} bg-[#181A1B] text-white flex items-center gap-2 shadow-md`} onClick={() => {
      // TODO handle search button click event
    }}>
      Search
    </Button>
  );
}