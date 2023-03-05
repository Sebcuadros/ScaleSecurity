import Button from "../UI/button"
import ScrollHeader from "../UI/scrollHeader"

export default function Header() {
    return <nav className="flex w-screen bg-black">
        <div className="basis-1/2"> Left </div>

        <div className="basis-1/2 flex justify-end mr-4"> <ScrollHeader/>< Button/> </div>
    </nav>
}