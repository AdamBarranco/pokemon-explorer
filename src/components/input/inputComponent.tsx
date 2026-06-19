import {Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {inter} from "../../utils/fontHelper"
import {SearchBtn} from "../button/buttonComponent"

interface InputComponentProps {
  value: string;
  onChange: (value: string) => void;
}

// custom component to display an input field with placeholder text and to figma design
export function InputComponent({ value, onChange }: InputComponentProps) {
  return (
    <Input type="text" placeholder="Find Pokémon" className={`${inter.className} rounded-md border px-3 py-1`} value={value} onChange={(e) => onChange(e.target.value)} />
  );
}

export function InputErrorComponent() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
      <Input id="input-invalid" placeholder="Error" aria-invalid />
      <FieldDescription>
        Cannot find Pokémon.
      </FieldDescription>
    </Field>
  );
}
