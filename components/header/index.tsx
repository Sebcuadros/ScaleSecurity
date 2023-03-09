import Button from "../UI/button"
import ScrollHeader from "../UI/scrollHeader"

export default function Header() {
    return <nav className="flex flex-wrap w-screen bg-black justify-center sm:justify-between">
        <div className="text-white ml-2 md:ml-4 pr-2 mt-4 md:mt-7 hidden md:block font-black text-xl">ScaleSecurity</div>

        <div className="pr-1"> <ScrollHeader/></div>

        <div className="lg:pr-4 xl:pr-6 hidden md:block"><Button/></div>
    </nav>
}