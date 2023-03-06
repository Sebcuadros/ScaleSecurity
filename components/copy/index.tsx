import Button from "../UI/button"

export default function Copy() {
    return (
        <div className="z-10 h-screen w-screen relative md:bg-transparent text-white overflow-scroll">
            <div className="h-1/3 text-center">
                <h1 className="text-5xl md:text-9xl mt-4 font-black">SCALE SECURITY</h1>
            </div>
            <div className="h-1/3 text-left ml-5">
                <p className="text-3xl md:text-8xl font-bold">WEB3 SECURITY HIRES MADE EASY</p>
            </div>
            <div className="h-1/4 text-left ml-5">
                <p className="text-3xl md:text-6xl font-bold">Research and engineering hires for the best teams building Web3 products</p>
            </div>
            <div className="h-1/4 text-left ml-5">
                <p className="text-3xl md:text-6xl font-bold">Technical recruiters that understand your products, problem sets, and needs. </p>
            </div>
            <div className="h-1/6 text-left ml-5">
                <p className="text-3xl md:text-6xl font-bold">Chat with us below!</p>
            </div>
            <div>
               < Button/>
            </div>
        </div>
    )
}