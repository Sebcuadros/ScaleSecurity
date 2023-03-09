import Header from "@/components/header";
import Hero from "@/components/hero";
import Copy from "@/components/copy";

export default function LandingPage() {
    return (
    <div className="bg-slate-200"> 
        <div>
            <Header/>
        </div>
        <div>
            <Copy/>
        </div>
    </div>
    );
}