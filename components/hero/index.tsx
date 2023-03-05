import Image from "next/image";
import ScaleSecurityDark from "public/ScaleSecurityDark.png";

export default function Hero() {
    return <div className="z-0 absolute h-screen w-screen">
            <Image src={ScaleSecurityDark} alt="Dragon protecting gold"/>
            </div>
}