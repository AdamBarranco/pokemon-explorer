import {Button} from "@/components/ui/button";
import {ArrowLeftIcon, ArrowRightIcon} from "lucide-react";

export function PrevBtn() {
  return (
    <Button variant="outline" className="flex items-center gap-2" onClick={() => {
      // TODO handle prev button click event
    }}>
      <ArrowLeftIcon className="w-4 h-4" />
      Prev
    </Button>
  );
}

export function NextBtn() {
  return (
    <Button variant="outline" className="flex items-center gap-2" onClick={() => {
      // TODO handle next button click event
    }}>
      Next
      <ArrowRightIcon className="w-4 h-4" />
    </Button>
  );
}
