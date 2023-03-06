export default function Button() {
    return <div>
    <button onClick={(e) => {window.location.href ='mailto:hello@scalesecurity.xyz';}} className="text-lime-400 hidden md:block md:font-black hover:bg-lime-400 hover:text-white border-2 border-lime-400 rounded-lg py-3 px-3 ml-8 my-4">
        HELLO@SCALESECURITY.XYZ
    </button>
    <button onClick={(e) => {window.location.href ='mailto:hello@scalesecurity.xyz';}} className="text-lime-400 md:hidden md:font-black hover:bg-lime-400 hover:text-white border-2 border-lime-400 rounded-lg py-3 px-3 ml-8 my-4">
        CONTACT
    </button>
    </div>
}