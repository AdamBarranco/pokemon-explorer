import {Input } from "@/components/ui/input";
import {inter} from "../../utils/fontHelper"


// custom component to display an input field with placeholder text and to figma design
export function InputComponent() {
  return (
    <Input type="text" placeholder="Find Pokémon" className={`${inter.className} w-full max-w-md`} />
  );
}