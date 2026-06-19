
import { useRouter } from "next/router";
import {inter} from "../../utils/fontHelper"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

// custom component to display a card with pokemon information and to figma design

// card component props to display pokemon information
type CardComponentProps = {
    name: string;
    imageUrl: string;
    number: number;
    type: string[];
};

export default function CardComponent({ name, imageUrl, number, type }: CardComponentProps) {
    const router = useRouter();
    return (
        <Card className="shadow-md" onClick={() => {
            router.push(`/pokemonDetailsPage?pokemonName=${encodeURIComponent(name)}`);
        }}>
            
                <img src={imageUrl} alt={name} className="object-cover" />
            
            <CardHeader>
                <h3 className={`${inter.className} text-lg font-semibold`}>{name}</h3>
                <p className={`${inter.className} text-sm font-medium`}>#{number}</p>
            </CardHeader>
            <CardContent>
                <div className="flex gap-2 mb-2">
                {type.map((t) => (
                    <p key={t} className={`${inter.className} bg-[#181A1B] text-white rounded-md px-[10px] py-[2px] gap-[10px] opacity-100`}>{t}</p>
                ))}
                </div>
            </CardContent>
        </Card>
    );
}
