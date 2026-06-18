
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
        <Card className="shadow-md">
            
                <img src={imageUrl} alt={name} className="object-cover" />
            
            <CardHeader>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm font-medium">#{number}</p>
            </CardHeader>
            <CardContent>
                <p>{type}</p>
            </CardContent>
        </Card>
    );
}
