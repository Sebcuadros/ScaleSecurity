import Button from "../UI/button"
import ScrollHeader from "../UI/scrollHeader"

export default function Header() {
    return <nav className="flex flex-wrap bg-black justify-center sm:justify-between">
        <div className="text-white ml-2 md:ml-4 mr-2 mt-4 md:mt-7 font-black text-xl">ScaleSecurity</div>

        <div className="mr-1"> <ScrollHeader/></div>

        <div className="lg:mr-4 xl:mr-6"><Button/></div>
    </nav>
}