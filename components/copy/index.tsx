import Button2 from "../UI/button2"

export default function Copy() {
    return (
        <div className="z-10 h-screen w-screen relative bg-neutral-200 text-black">
            <div className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black">WEB3 SECURITY HIRES MADE EASY</h1>
            </div>
            <div className="text-left ml-5 mb-24">
                <p className="text-base sm:text-base md:text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center mb-10">End to end recruitment support for teams building Web3 products</p>
            </div>
            <div className="flex-row justify-center space-x-24">
                <div className="text-center w-72 h-96 bg-neutral-100 px-10 rounded">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-3"> Easy Onboarding </h2>
                    <p className="text-xl md:text-2xl font-medium">Schedule a free consult session with our core team, walk us through your needs and you're good to go. </p>
                </div>
                <div className="text-center w-72 h-96 bg-neutral-100 px-10 rounded">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-3"> Specialized Search </h2>
                    <p className="text-xl md:text-2xl font-medium">Technical recruiters that can tech and culture align engineers and employers</p>
                </div>
                <div className="text-center w-72 h-96 bg-neutral-100 px-10 rounded">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-3"> Custom Recruitment</h2>
                    <p className="text-xl md:text-2xl font-medium">End to end recruitment support from sourcing, interviewing, onboarding, and tooling set up.</p>
                </div>
            </div>
            <div className="mb-4 md:mb-28">
               < Button2/>
            </div>
        </div>
    )
}