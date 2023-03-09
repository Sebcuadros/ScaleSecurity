export default function Button2() {
    return <div className="flex w-screen justify-center bg-white">
    <button onClick={(e) => {window.location.href ='mailto:hello@scalesecurity.xyz';}} className="text-lime-400 md:font-black text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl hover:bg-lime-400 hover:text-white border-2 border-lime-400 bg-black rounded-lg py-3 px-3 my-4">
        HELLO@SCALESECURITY.XYZ
    </button>
    </div>
}