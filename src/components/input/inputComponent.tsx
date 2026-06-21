import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field"
import { inter } from "../../utils/fontHelper"

interface InputComponentProps {
  value: string;
  onChange: (value: string) => void;
}

// custom component to display an input field with placeholder text and to figma design
export function InputComponent({ value, onChange }: InputComponentProps) {
  return (
    <Input type="text" placeholder="Find Pokémon" className={`${inter.className} 
    rounded-md border px-3 py-1`} value={value} onChange={(e) => onChange(e.target.value)} />
  );
}

export function InputErrorComponent({ value, onChange }: InputComponentProps) {
  return (
    <Field data-invalid>
      <Input id="input-invalid" placeholder="Cannot find Pokémon" className={`${inter.className} 
      text-red-500 rounded-md border px-3 py-1`} aria-invalid value={value} onChange={(e) => onChange(e.target.value)}  />
    </Field>
  );
}
