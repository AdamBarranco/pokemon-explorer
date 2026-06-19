
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
    type: string;
};

export default function CardComponent({ name, imageUrl, number, type }: CardComponentProps) {
    return (
        <Card className="shadow-md" onClick={() => {
            // TODO handle card click event
        }}>
            
                <img src={imageUrl} alt={name} className="object-cover" />
            
            <CardHeader>
                <h3 className={`${inter.className} text-lg font-semibold`}>{name}</h3>
                <p className={`${inter.className} text-sm font-medium`}>#{number}</p>
            </CardHeader>
            <CardContent>
                <p className={`${inter.className} bg-[#181A1B] text-white px-2 py-1 rounded`}>{type}</p>
            </CardContent>
        </Card>
    );
}
