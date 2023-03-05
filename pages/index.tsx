import Header from "@/components/header";
import Hero from "@/components/hero";
import Copy from "@/components/copy";

export default function LandingPage() {
    return (
    <div> 
        <div>
            <Header/>
        </div>
        <div>
            <Hero/>
            <Copy/>
        </div>
    </div>
    );
}