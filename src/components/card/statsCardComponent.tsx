import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { inter } from "../../utils/fontHelper"
import { Progress } from "@/components/ui/progress"
import { capitalize } from "@/src/utils/capitalHelper";

type SideCardProps = {

    height: number;
    category: string;
    weight: number;
    gender: string;
}

type StatsCardProps = {

    hp: number;
    attack: number;
    defense: number;
    sAttack: number;
    sDefense: number;
    speed: number;
}

type OverviewCardProps = {

    type: string[];
    weaknesses: string[];
}
type AbilityCardProps = {

    abilities: { name: string; description: string }[];
}

type InfoCardProps = {
    content: string;
}

export function InfoCard({ content }: InfoCardProps) {

    return (
        <Card className="p-9 px-12 gap-8 rounded-xl h-[133px] items-start justify-center">
            <CardContent>
                <div className="flex items-center gap-3 ">
                    <div className="w-[101px] h-[97px] rounded-full overflow-hidden bg-white flex items-center justify-center border">
                        <img src="/pokeball.png" alt="pokeball" className="w-[97px] h-[93px]" />
                    </div>
                    <p className={`${inter.className} flex-1`}>{content}</p>
                </div>
            </CardContent>
        </Card>
    );
}

export function SideCard({ height, category, weight, gender }: SideCardProps) {

    return (
        <Card className="p-9 px-12 gap-8 rounded-xl h-full">
            <CardContent>

                <div className="flex flex-col gap-4 ">
                    <div className="flex flex-col text-left text-lg ">
                        <h3 className={`${inter.className} font-semibold text-2xl leading-8 tracking-[-0.025em] align-middle`}>Height</h3>
                        <p className={`${inter.className}`}>{(height / 10).toFixed(1) + "m"}</p>
                    </div>
                    <div className="flex flex-col text-left text-lg ">
                        <h3 className={`${inter.className} font-semibold text-2xl leading-8 tracking-[-0.025em] align-middle`}>Category</h3>
                        <p className={`${inter.className}`}>{category}</p>
                    </div>
                    <div className="flex flex-col text-left text-lg ">
                        <h3 className={`${inter.className} font-semibold text-2xl leading-8 tracking-[-0.025em] align-middle`}>Weight</h3>
                        <p className={`${inter.className} `}>{(weight / 10).toFixed(1) + "kg"}</p>
                    </div>
                    <div className="flex flex-col text-left text-lg ">
                        <h3 className={`${inter.className} font-semibold text-2xl leading-8 tracking-[-0.025em] align-middle`}>Gender</h3>
                        <p className={`${inter.className}`}>{gender}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export function OverviewCard({ type = [], weaknesses = [] }: OverviewCardProps) {

    return (
        <Card className="p-9 px-12 gap-8 rounded-xl h-full">
            <CardContent>
                <div className=" ">
                    <div className="flex flex-col gap-3">
                        <h3 className={`${inter.className} text-left text-[24px] font-semibold leading-8 tracking-[-0.025em]`}>Type</h3>
                        <div className="flex flex-wrap mb-2  py-1 gap-3">
                            {type.map((t) => (
                                <p key={t} className={`${inter.className} text-[16px] bg-[#181A1B] text-white rounded-md px-[10px] py-[2px] gap-[10px] opacity-100`}>{t}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className={`${inter.className} text-left text-[24px] font-semibold leading-8 tracking-[-0.025em]`}>Weaknesses</h3>
                        <div className="flex flex-wrap mb-2  py-1 gap-3">
                            {weaknesses.map((w) => (
                                <p key={w} className={`${inter.className} text-[16px] bg-[#181A1B] text-white rounded-md px-[10px] py-[2px] gap-[10px] opacity-100`}>{w}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )

}

export function StatsCard({ hp, attack, defense, sAttack, sDefense, speed }: StatsCardProps) {

    return (
        <Card className="p-9 px-12 gap-8 rounded-xl h-full">
            <CardContent>
                <div className="">
                    <div className="flex flex-col gap-3">
                        <h3 className={`${inter.className} text-left text-[24px] font-semibold leading-8 tracking-[-0.025em]`}>Stats</h3>
                        <div className="flex flex-col gap-2">
                            <Stat stat="HP" value={hp} />
                            <Stat stat="Attack" value={attack} />
                            <Stat stat="Defense" value={defense} />
                            <Stat stat="Special Attack" value={sAttack} />
                            <Stat stat="Special Defense" value={sDefense} />
                            <Stat stat="Speed" value={speed} />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )

}

export function AbilityCard({ abilities = [{ name: "", description: "" }] }: AbilityCardProps) {

    return (
        <Card className="p-9 px-12 gap-8 rounded-xl h-full">
            <CardContent>
                <div className="">
                    <div className="flex flex-col gap-3">
                        <h3 className={`${inter.className} text-left text-[24px] font-semibold leading-8 tracking-[-0.025em]`}>Ability</h3>
                        <div className="flex flex-wrap mb-2  py-1 gap-3">
                            {abilities.map((a) => (
                                <div key={a.name} className="flex flex-col gap-1">
                                    <p className={`${inter.className} text-[20px] text-left `}>{capitalize(a.name)}</p>
                                    <p className={`${inter.className} text-[16px] text-left `}>{a.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export function ProgressBar({ progress }: { progress: number }) {
    return <Progress value={progress} className="w-full h-2" />
}

function Stat({ stat, value }: { stat: string; value: number }) {
    return (
        <div className="flex items-center gap-2">
            <p className={`${inter.className} text-[20px] text-left w-48 text-sm font-semibold`}>{stat}:</p>
            <div className="flex-1">
                <ProgressBar progress={value} />
            </div>
        </div>
    )
}

