import { Hero } from "../Hero"
import { Buy } from "../Buy"
import { CarCards } from "../carCard"
import { Feature } from "../featureTools/featureIndex"


export default function Home() {
    return(
        <>
            <Hero />
            <Buy />
            <div className="underLine">_</div>
            <CarCards />
            <Feature />
        </>
    )
}