import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {inter} from "../../utils/fontHelper"


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
    
    abilities: string[];
}

export function InfoCard({ title, content }: { title: string; content: string }) {

}

export function sideCard({height, category, weight, gender}: SideCardProps){

    return(
        <Card>
            <CardContent>
                <div className="p-[36px] px-[48px] flex flex-col gap-8 rounded-xl border ">
                    <div className="">
                        <h3 className={`${inter.className} font-semibold`}>Height</h3>
                    <p className={`${inter.className}`}>{(height/10).toFixed(1)+"m"}</p>
                    </div>
                    <div className="">
                        <h3 className={`${inter.className} font-semibold`}>Category</h3>
                    <p className={`${inter.className}`}>{category}</p>
                    </div>
                    <div className="">
                        <h3 className={`${inter.className} font-semibold`}>Weight</h3>
                    <p className={`${inter.className}`}>{(weight/10).toFixed(1)+"kg"}</p>
                    </div>
                    <div className="">
                        <h3 className={`${inter.className} font-semibold`}>Gender</h3>
                    <p className={`${inter.className}`}>{gender}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export function overviewCard({type, weaknesses}: OverviewCardProps){

    return (
        <Card>
            <CardContent>
                <div className="">
                    <div className="">
                        <h3>Type</h3>
                        {type.map((t => (
                            <p key={t} className={`${inter.className} bg-[#181A1B] text-white rounded-md px-[10px] py-[2px] gap-[10px] opacity-100`}>{t}</p>
                        )))}
                    </div>
                    <div className="">
                        <h3>Weaknesses</h3>
                        {weaknesses.map((w => (
                            <p key={w} className={`${inter.className} bg-[#181A1B] text-white rounded-md px-[10px] py-[2px] gap-[10px] opacity-100`}>{w}</p>
                        )))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )

}

export function statsCard({hp, attack, defense, sAttack, sDefense, speed}: StatsCardProps){


}