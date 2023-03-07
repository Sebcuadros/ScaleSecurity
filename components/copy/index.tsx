import Button2 from "../UI/button2"

export default function Copy() {
    return (
        <div className="z-10 h-screen w-screen relative bg-neutral-200 text-black overflow-scroll">
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black">SCALE SECURITY</h1>
            </div>
            <div className="text-left ml-5 mb-4">
                <p className="text-base sm:text-base md:text-xl lg:text-2xl 2xl:text-3xl font-bold">WEB3 SECURITY HIRES MADE EASY</p>
            </div>
            <div className="text-left ml-5 mb-4">
                <p className="text-2xl md:text-5xl font-bold">Research and engineering hires for the best teams building Web3 products</p>
            </div>
            <div className="text-left ml-5 mb-4">
                <p className="text-2xl md:text-5xl font-bold">Technical recruiters that understand your products, problem sets, and needs. </p>
            </div>
            <div className="text-left ml-5 mb-4">
                <p className="text-2xl md:text-5xl font-bold">Start hiring faster.</p>
            </div>
            <div className="mb-4 md:mb-28">
               < Button2/>
            </div>
        </div>
    )
}