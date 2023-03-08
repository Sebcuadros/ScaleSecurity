import Button from "../UI/button"
import ScrollHeader from "../UI/scrollHeader"

export default function Header() {
    return <nav className="flex w-screen bg-black">
        <div className="basis-1/6 md:basis-1/2 text-left text-white ml-4 mt-4 font-black text-2xl">ScaleSecurity</div>

        <div className="basis-5/6 md:basis-1/2 flex justify-end mr-4"> <ScrollHeader/>< Button/> </div>
    </nav>
}