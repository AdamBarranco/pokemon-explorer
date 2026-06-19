import {Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {inter} from "../../utils/fontHelper"
import {SearchBtn} from "../button/buttonComponent"


// custom component to display an input field with placeholder text and to figma design
export function InputComponent() {
  return (
    <Input type="text" placeholder="Find Pokémon" className={`${inter.className} rounded-md border px-3 py-1`} />
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

export function InputInlineComponent() {
  return (
    <Field>
      <InputComponent />
      <SearchBtn />
    </Field>
  );
}