import "../app/globals.css";
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

export default function LandingPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Pokémon Browser
            </h1>
            <h2 className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Search and find Pokémon 
            </h2>
            <Separator className="my-8 w-full" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        Card Content
                    </CardContent>
                    <CardFooter>
                        Card Footer
                    </CardFooter>
                </Card>
            </div>

        </main>
    </div>
  );
}
        

