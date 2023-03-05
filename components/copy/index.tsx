import Button from "../UI/button"

export default function Copy() {
    return (
        <div className="z-10 h-screen relative text-white overflow-scroll">
            <div className="h-1/2 text-center">
                <h1 className="text-9xl mt-4">SCALE SECURITY</h1>
            </div>
            <div className="h-3/4 text-left ml-5">
                <p className="text-8xl">ScaleSecurity, a boutique Web3 security recruitment firm</p>
            </div>
            <div className="h-1/4 text-left ml-5">
                <p className="text-6xl">Research and engineering hires for the best teams building on Ethereum.</p>
            </div>
            <div className="h-1/4 text-left ml-5">
                <p className="text-6xl">Technical recruiters that understand your products, problem sets, and needs. </p>
            </div>
            <div className="h-1/6 text-left ml-5">
                <p className="text-6xl">Chat with us below!</p>
            </div>
            <div>
               < Button/>
            </div>
        </div>
    )
}