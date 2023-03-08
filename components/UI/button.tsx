export default function Button() {
    return <div className="bg-neutral-200">
    <button onClick={(e) => {window.location.href ='mailto:hello@scalesecurity.xyz';}} className="text-lime-400 hidden md:block md:font-black hover:bg-lime-400 hover:text-white border-2 border-lime-400 rounded-lg py-3 my-4">
        HELLO@SCALESECURITY.XYZ
    </button>
    <button onClick={(e) => {window.location.href ='mailto:hello@scalesecurity.xyz';}} className="text-lime-400 md:hidden md:font-black text-xl sm:text-2xl hover:bg-lime-400 hover:text-white border-2 border-lime-400 rounded-lg py-3 my-4">
        HELLO@SCALESECURITY.XYZ
    </button>
    </div>
}