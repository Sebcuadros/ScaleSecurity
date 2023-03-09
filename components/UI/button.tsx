export default function Button() {
    return <div>
    <button onClick={(e) => {window.location.href ='mailto:hello@scalesecurity.xyz';}} className="text-lime-400 hidden 2xl:block md:font-black hover:bg-lime-400 hover:text-white border-2 border-lime-400 rounded-lg py-3 my-4 px-3">
        HELLO@SCALESECURITY.XYZ
    </button>
    </div>
}